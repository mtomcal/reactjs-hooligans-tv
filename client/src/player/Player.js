/* jshint browser: true, esnext: true */
var React = require("react");

export default React.createClass({
    propTypes: {
        source: React.PropTypes.string.isRequired,
        autoplay: React.PropTypes.bool.isRequired
    },
    render() {
        var styles = {};
        styles.iframe = {
            "position": "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        };
        styles.playerContainer = {
            "position": "relative",
            "paddingBottom": "58.25%", /* 16:9 */
            "paddingTop": "0px",
            "width": "100%",
            // "height": "100%"
            
        };
        styles.container = {
            top: 0,
            left: 0,
            "position": "fixed",
            "zIndex": 9999999,
            "width": "100%",
            "height": "100%",
            "background-color": "black"
        };
        styles.close = {
            "position": "relative",
            "textAlign": "right",
            "marginRight": "1%",
            "color": "white"
        };
        var _autoplay;
        if (this.props.autoplay) {
            _autoplay = "1";
        } else {
            _autoplay = "0";
        }

        return (
        <div style={styles.container}>
            <h5 style={styles.close}><a onClick={this.props.closeHandler} href="javascript:void">CLOSE</a></h5>
            <div className="player" style={styles.playerContainer}>
                <iframe
                    id={"player_" + this.props.source}
                    style={styles.iframe}
                    src={"https://www.youtube.com/embed/" + this.props.source + "?enablejsapi=1&autoplay=" + _autoplay}
                    frameBorder="0"
                    autoHide="0"
                    allowFullScreen="0">
                </iframe>
            </div>
        </div>);
    }
});