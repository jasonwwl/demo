import React, { Component } from 'react';
import Content from './Content';
import TextInput from './TextInput';
import Login from './Login';
import './Layout.less'

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      messages: [{
        name: "demo",
        content: "初始化第一条"
      }]
    };
    this.onSendMsg = this.onSendMsg.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.socket = null;
  }

  componentDidMount() {
    const socket = io.connect('http://util.shiyuehehu.com:8001');
    this.socket = socket;
    socket.on('msg', (data) => {
      this.state.messages.push(data);
      this.setState({
        messages: this.state.messages
      });
    });
  }

  onSendMsg(msg) {
    this.socket.emit('send_msg', {
      name: this.state.name,
      content: msg
    })
  }

  onLogin(name) {
    this.setState({
      name
    });
  }

  render() {
    return (
      <div className='Layout__main'>
        <Login show={!this.state.name} onLogin={this.onLogin} />
        <Content messages={this.state.messages} />
        <TextInput sendMsg={this.onSendMsg} />
      </div>
    )
  }
}
