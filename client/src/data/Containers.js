import React from 'react';
import axios from 'axios';
import _ from 'lodash';

var inMemoryCache = {
    
};

var query = {};

var store = {};

var ErrorComponentBase = React.createClass({
        render() {
            return (<div>
            <p className="strong">Failed to fetch {this.props.route}</p>
            <pre>{this.props.err.stack.toString()}</pre>
            </div>);
        }
    });
    
var LoaderComponentBase = React.createClass({
        render() {
            return <p className="strong">Loading...</p>;
        }
});

/**
 * Store Container
 */
store.createContainer = function(Component, {stores, LoaderComponent, ErrorComponent}) {
    ErrorComponent = ErrorComponent || ErrorComponentBase;
    
    LoaderComponent = LoaderComponent || LoaderComponentBase;
    
    var DataComponent = React.createClass({
        getInitialState() {
            return {
                isLoaded: false,
                isError: false,
                queryData: {}
            };
        },
        componentDidMount() {
            this.listeners = stores.map((item) => {
                return item.store.listen((res) => {
                    this.setState({
                        queryData: {
                            [item.name]: res
                        }
                    }, () => { //Wait for set state done then check if all keys have data
                        if (this.isLoaded()) {
                            this.setState({isLoaded: true});
                        }
                    });
                });
            });
            this.actions = {};
            stores.forEach((item) => {
                this.actions[item.name] = item.actions;
                this.actions[item.name].connect();
            });
        },
        isLoaded() {
           return stores.map((item) => {
                return this.state.queryData[item.name] !== undefined;
            }).reduce((p, n) => {
                return p && n;
            }, true);
        },
        componentWillUnmount() {
            this.listeners.forEach((unsub) => unsub());
        },
        render() {
            if (this.state.isError) return <ErrorComponent err={this.state.err} />;
            if (this.state.isLoaded) return <Component actions={this.actions} queryData={this.state.queryData} {...this.props}/>;
            return <LoaderComponent/>;
        }
    });
    
    return DataComponent;
};

query.createContainer = function(Component, {method, route, payload, LoaderComponent, ErrorComponent}) {
    
    ErrorComponent = ErrorComponent || ErrorComponentBase;
    
    LoaderComponent = LoaderComponent || LoaderComponentBase;
    
    var quester = function (cb) {
        var cache = inMemoryCache[route];
        if (cache) {
            return cb(null, cache);
        }
        axios[method](route, payload)
            .then(function (res) {
                inMemoryCache[route] = res;
                cb(null, res);
            })
            .catch(function (err) {
                console.log(err);
                cb(err);
            });
    };
    
    var DataComponent = React.createClass({
        getInitialState() {
            return {
                isLoaded: false,
                isError: false
            };
        },
        componentDidMount() {
            quester((err, res) => {
                if (err) {
                    return this.setState({err: err, isError: true});
                }
                return this.setState({isLoaded: true, queryData: res});
            });
        },
        render() {
            if (this.state.isError) return <ErrorComponent err={this.state.err} route={route} />;
            if (this.state.isLoaded) return <Component queryData={this.state.queryData} {...this.props}/>;
            return <LoaderComponent/>;
        }
    });
    
    return DataComponent;
};

export default {
    query,
    store
};