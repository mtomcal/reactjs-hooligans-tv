import React from 'react';
import Player from './Player';
import ThumbnailContainer from './ThumbnailContainer';

export default React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired,
    autoplay: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    imageURL: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return {
        isPlayerView: false
    };
  },
  onCloseHandler() {
    this.setState({isPlayerView: false});
  },
  onClick() {
    this.setState({isPlayerView: true});
  },
  playerView() {
    return <Player closeHandler={this.onCloseHandler.bind(this)} source={this.props.source} autoplay={this.props.autoplay} />;
  },
  thumbnailView() {
    return <ThumbnailContainer title={this.props.title} imageURL={this.props.imageURL} />;
  },
  render() {
    if (this.state.isPlayerView) return this.playerView();
    return <div onClick={this.onClick}>{this.thumbnailView()}</div>;
  }
});