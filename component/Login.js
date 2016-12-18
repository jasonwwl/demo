import React, { Component } from 'react';
import './Login.less';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  onClick() {
    if (this.state.name) {
      this.props.onLogin(this.state.name);
    }
  }

  render() {
    return (
      <div className='Login' style={{ display: this.props.show ? 'flex' : 'none' }}>
        <header>请输入您的昵称</header>
        <div className='TextInput'>
          <input onChange={this.onChange} value={this.state.name} />
          <div className='btn' onClick={this.onClick}>加入聊天</div>
        </div>
      </div>
    )
  }
}
