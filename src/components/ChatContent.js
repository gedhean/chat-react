import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { addMessage } from '../redux/actions';
import ChatMessage from './ChatMessage';
import './chatContent.css';

var socket = io('http://localhost:8000');

class ChatContent extends Component {
  componentDidMount() {
    socket.removeAllListeners(); //That line is really important!!
    const {dispatch} = this.props;
    socket.on('connect', log('Client connected'));
    socket.on('disconnect', reason => {
      log('Client disconnected: '+reason)
    }); 
    socket.on('connect_error', error => {
      console.error('Connection erro: ', error);
    });
    socket.on('agente message', msg => {
      dispatch(addMessage(msg.content, msg.time, 'agente'));
    });
    this.cleanIpunt();
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const {dispatch} = this.props;
    if (this.msgInput.value) {
      let msg = {
        content: this.msgInput.value,
        time: new Date().toLocaleTimeString(),
        from: 'client'
      }
      dispatch(addMessage(msg.content, msg.time, msg.from));
      socket.emit('client message', msg);
    }
  }

  cleanIpunt = () => {
    this.msgInput.value = "";
    this.msgBody.scrollTop = this.msgBody.scrollHeight;
  }

  componentDidUpdate() {
    this.cleanIpunt();
  }

  render() {
    const timeNow = new Date().toLocaleTimeString();
    return (
      <div className="chat-content">
        <div className="messages" ref={(body) => { this.msgBody = body; }}>
          <ChatMessage
            msg={"Olá"}
            time={timeNow}
            from={"agente"}
          />
          <ChatMessage
            msg={"Preciso da sua ajuda."}
            time={timeNow}
            from={"client"}
          />
          <ChatMessage
            msg={"Antes de tudo, preciso de algumas informações. Por Favor, digite seu CPF e númoro de conta."}
            time={timeNow}
            from={"agente"}
          />
          {
            this.props.messages.map((msg, key) => (
              <ChatMessage
                key={key}
                msg={msg.content}
                time={msg.time}
                from={msg.from}
              />
            ))
          }
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            ref={(input) => { this.msgInput = input; }}
            id="msg"
            className="chat-input-msg"
            type="text"
            name="input-msg"
            placeholder="Sua mensagem"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

const mapStoreToProps = store => ({
  messages: store.messages
});

export default connect(mapStoreToProps)(ChatContent);
//Debug log
const log = str => {
  console.log('At ChatContent: ', str);
}