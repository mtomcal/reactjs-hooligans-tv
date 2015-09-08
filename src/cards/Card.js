import React from 'react';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  renderTitleView() {
    return (
      <div className="row">
          <div className="col-md-12">
            <h2>{this.props.title}</h2>
          </div>
      </div>
    );
  },
  renderChildrenView() {
    return (
      <div>
      <div className="row">
          <div className="col-md-12">
            <h2>{this.props.title}</h2>
            <hr />
          </div>
        </div>
      <div className="row">
        <div className="col-md-12">
          {this.props.children}
        </div>
      </div>
      </div>
    );
  },
  render() {
    var style = {
      backgroundColor: "white",
      "borderRadius": "2px",
      "paddingBottom": "1.5em",
      "marginBottom": "1.5em"
    };
    
    var view;
    
    if (this.props.children) {
      view = this.renderChildrenView();
    } else {
      view = this.renderTitleView();
    }
    return (
      <div className="container-fluid" style={style}>
        {view}
      </div>
    );
  }
});