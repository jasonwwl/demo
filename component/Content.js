import React, { Component } from 'react';
import './Content.less';

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  renderMsg() {
    return this.props.messages.map((msg, i) => {
      return (
        <div className='msg' key={i}>
          <span className='name'>{msg.name}</span>:<span className='content'>{msg.content}</span>
        </div>
      );
    })
  }

  render() {
    return (
      <div className='Content__main'>
        {this.renderMsg()}
      </div>
    );
  }
}
