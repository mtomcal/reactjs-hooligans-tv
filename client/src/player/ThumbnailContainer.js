var React = require("react");
var Thumbnail = require("./Thumbnail");
var Metadata = require("./Metadata");

var ThumbnailContainer = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        imageURL: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            hover: false
        };
    },
    doMouseOver: function (e) {
        this.setState({hover: true});
    },
    doMouseOut: function (e) {
        this.setState({hover: false});
    },
    render: function () {
        var styles = {
            position: "relative",
            float: "left",
            overflow: "hidden",
            width: "100%",
            marginLeft: "1.333%",
            marginTop: "1.333%",
            transitionProperty: "all",
            transitionDuration: ".5s",
            transitionTimingFunction: "cubic-bezier(0, 1, 0.5, 1)"
        };
        return (<div onClick={this.doOnClick} onMouseOver={this.doMouseOver} onMouseOut={this.doMouseOut} style={styles}>
            <Thumbnail imageURL={this.props.imageURL} />
            <Metadata hover={this.state.hover} title={this.props.title} {...this.props}/>
        </div>);

    }
});

module.exports = ThumbnailContainer;
