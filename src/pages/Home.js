import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Player from '../player';
import { Containers } from '../data';
import { Card } from '../cards';

var Home = React.createClass({
    propTypes: {
      queryData: React.PropTypes.object.isRequired
    },
    render() {
        var style = {};

        const videos = this.props.queryData.data.map(function (res, index) {
          return (<div className="col-lg-4">
            <Player
              key={index}
              source={res.snippet.resourceId.videoId}
              title={res.snippet.title}
              autoplay={true}
              imageURL={res.snippet.thumbnails.high.url}
            />
          </div>);
        });

        const offense = videos.filter((item, index) => {
          return index < 6;

        });

        const defense = videos.filter((item, index) => {
          return index >= 6 && index < 12;
        });

        return (
        <div>
            <div className="container-fluid" style={style}>
                <div className="row">
                  <div className="col-lg-12">
                    <Card title="Home" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                      <Card title="Offense">
                        {offense}
                      </Card>
                  </div>
                  <div className="col-lg-6">
                    <Card title="Defense">
                      {defense}
                    </Card>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6">
                      <Card title="Offense">
                        {offense}
                      </Card>
                  </div>
                  <div className="col-lg-6">
                    <Card title="Defense">
                      {defense}
                    </Card>
                  </div>
              </div>
            </div>
          </div>
        );
    }
});

export default Containers.query.createContainer(Home, {
  method: 'get',
  route: 'http://127.0.0.1:3000/videos',
})
