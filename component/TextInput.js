import React, { Component } from 'react';
import './TextInput.less';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.sendMsg(this.state.text);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className='TextInput'>
        <input onChange={this.onChange} value={this.state.text} />
        <div className='btn' onClick={this.onClick}>发送</div>
      </div>
    )
  }
}
