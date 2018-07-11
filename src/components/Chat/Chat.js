import React, { Component } from 'react';
import io from 'socket.io-client'
import { connect } from 'react-redux';
import './Chat.css';
import SERVER_URL from '../../config';


class Chat extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      messages: [{
        name: '',
        timestamp: '',
        message: 'Start the Chat'
      }],
      inputMessage: '',
      chat: [],
    }
    // rogers server:
    this.socket = io(SERVER_URL)
    // lars server:
    // this.socket = io('http://192.168.1.194:3001')
  }
  renderMessages = () => {
    if(this.props.chatdata.length > this.state.messages.length) {
      return this.props.chatdata.map((msg, index) => {
        return (<div key={index}>
          <span className="chat-name">{msg.name}</span>
          <div className="chat-message">{msg.message}</div>
        </div>);
      });      
    }
    return this.state.messages.map((msg, index) => {
      return (<div key={index}>
        <span className="chat-name">{msg.name}</span>
        <span className="chat-timestamp">{msg.timestamp}</span>
        <div className="chat-message">{msg.message}</div>
      </div>);
    });
  }

  componentDidMount() {
    this.setState({username: this.props.userdata.name})
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
      this.props.updateChatData([{name: this.state.username, message: this.state.inputMessage}]);
      this.socket.emit('new message', {
        name: this.state.username,
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

const mapStateToProps = (state) => ({
  userdata: state.userdata,
  chatdata: state.chatdata,
})

const mapDispatchToProps = (dispatch) => ({
  updateChatData: (chat) => dispatch({
    type: 'SAVE_CHAT',
    chatdata: chat
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);