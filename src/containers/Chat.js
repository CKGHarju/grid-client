import React, { Component } from 'react';
import io from 'socket.io-client'
import '../styles/Chat.css';


class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [{
        name: 'Bob',
        timestamp: '5 min ago',
        message: 'this is a message'
      }],
      inputMessage: '',
    }
    // rogers server:
    this.socket = io('http://192.168.1.241:3631')
    // lars server:
    // this.socket = io('http://192.168.1.194:3001')
  }
  renderMessages = () => {
    return this.state.messages.map((msg, index) => {
      return (<div key={index}>
        <span className="chat-name">{msg.name}</span>
        <span className="chat-timestamp">{msg.timestamp}</span>
        <div className="chat-message">{msg.message}</div>
      </div>);
    });
  }
  componentDidMount() {
    const room = window.location.pathname.split('/')[1];

    this.socket.emit('join', { room: room });

    this.socket.on('handle message', message => {
      this.setState((prevState) => {
        let messages = prevState.messages
        messages.push(message)
        return {
          messages: messages
        }
      })
    })
  }
  componentWillUnmount() {
    this.socket.close()
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    if (e.keyCode === 13 || e.charCode === 13) {
      e.preventDefault();
      const room = window.location.pathname.split('/')[1];
  
      this.socket.emit('new message', {
        name: 'Bob',
        room: room,
        message: this.state.inputMessage,
        timestamp: Date.now(),
      })
      this.setState({
        inputMessage: ''
      })
    }
  }
  render() {
    return (
      <div className="Chat">
        <div className="messages-container">
          {this.renderMessages()}
        </div>
          <textarea onKeyDown={this.handleSubmit} onChange={this.handleInput} name="inputMessage" value={this.state.inputMessage} class="chat-textarea"/>
      </div>
    )
  }
}

export default Chat;