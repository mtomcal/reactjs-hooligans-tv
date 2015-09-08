/* jshint browser:true */
var React = require("react");
var flowtype = require("flowtype");
var _ = require('lodash');

var Metadata = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            styles: {
                position: "absolute",
                left: 0,
                bottom: 0,
                padding: 0,
                paddingTop: "3%",
                paddingLeft: "3%",
                margin: 0,
                backgroundColor: "#000",
                color: "white",
                width: "200%",
                height: "20%",
                opacity: 0.9

            }
        };
    },
    componentDidMount: function () {
        flowtype(document.getElementById("metadata-" + _.kebabCase(this.props.title)), {
            maxWidth: '800px',
            minWidth: '7px',
            lineRatio: 1.45,
            min: 10,
            max: 22
        });
    },
    componentWillReceiveProps: function (props) {
        if (props.hover) {
            this.doMouseOver();
        } else {
            this.doMouseOut();
        }
    },
    doMouseOver: function (e) {
        if (this.props.title.length < 40) {
            return;
        }
        this.setState({
            styles: {
                position: "absolute",
                bottom: 0,
                padding: 0,
                paddingTop: "3%",
                paddingLeft: "3%",
                margin: 0,
                backgroundColor: "#000",
                color: "white",
                width: "200%",
                height: "20%",
                opacity: 0.9,
                left: "-100%",
                transitionProperty: "all",
                transitionDuration: "8s",
                transitionTimingFunction: "cubic-bezier(.10, .10, .44, .61)",
                "WebkitTransform": "translate3d(0,0,0)",
                "MozTransform": "translate3d(0,0,0)"
            }
        });
    },
    doMouseOut: function (e) {
        if (this.props.title.length < 40) {
            return;
        }
        this.setState({
            styles: {
                position: "absolute",
                left: 0,
                bottom: 0,
                padding: 0,
                paddingTop: "3%",
                paddingLeft: "3%",
                margin: 0,
                backgroundColor: "#000",
                color: "white",
                width: "200%",
                height: "20%",
                opacity: 0.9,
                transitionTimingFunction: "cubic-bezier(.10, .10, .44, .61)",
                transitionDuration: "0.3s",
                "WebkitTransform": "translate3d(0,0,0)",
                "MozTransform": "translate3d(0,0,0)"
            }
        });
    },
    render: function () {
        return <p id={"metadata-" + _.kebabCase(this.props.title)} style={this.state.styles}>{this.props.title}</p>;
    }
});

module.exports = Metadata;
