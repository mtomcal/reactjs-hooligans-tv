import React from 'react';
import { Card } from '../cards';
import { Containers, Chat } from '../data';

var ChatList = React.createClass({
  propTypes: {
    actions: React.PropTypes.object,
    queryData: React.PropTypes.object
  },
  onClick() {
    var chat = this.refs.chatBox.getDOMNode().value;
    this.props.actions.chat.add({name: "Guest", text: chat});
    this.refs.chatBox.getDOMNode().value = "";
  },
  renderInput() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11">
            <input ref="chatBox" type="text" className="form-control" placeholder="Chat Message..." />
          </div>
          <div className="col-md-1">
            <button type="submit" onClick={this.onClick} className="btn btn-default">Send</button>
          </div>
        </div>
      </div>
    );
  },
  renderList() {
    var list = this.props.queryData.chat.map(({name, text}, index) => {
      return <li key={index}><b>{name}</b>: {text}</li>;
    });
    return <ul>{list}</ul>;
  },
  render() {
    return (
      <div>
        {this.renderList()}
        {this.renderInput()}
      </div>
    );
  }
});


export default React.createClass({
  componentDidMount() {

  },
  render() {
    var List = Containers.store.createContainer(ChatList, {
      stores: [Chat]
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Card title="Chat">
              <List />
            </Card>
          </div>
        </div>
      </div>
    );
  }
});