/* jshint esnext: true */
var React = require("react");

var Thumbnail = React.createClass({
    propTypes: {
        imageURL: React.PropTypes.string.isRequired
    },
    render() {
        var styles = {};
        styles.image = {
            "position": "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        };
        styles.container = {
            "position": "relative",
            "paddingBottom": "56.25%", /* 16:9 */
            "paddingTop": "25px",
            "height": 0
        };

        return <div style={styles.container}><img style={styles.image} src={this.props.imageURL}/></div>;
    }
});

module.exports = Thumbnail;
