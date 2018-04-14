import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import _ from 'lodash';

import { addMessage } from '../redux/actions';
import ChatMessage from './ChatMessage';
import './chatContent.css';
import genId from '../helpers/idGenerator';

var socket = io('http://localhost:8000');

class ChatContent extends Component {
  componentDidMount() {

    const {dispatch} = this.props;
    socket.removeAllListeners(); //That line is really important!!
    socket.on('connect', log('Client connected o/'));
    socket.on('disconnect', reason => {
      log('Client disconnected: '+reason)
    }); 
    socket.on('connect_error', error => {
      log('Connection erro: ', error);
    });
    socket.on('agente message', msg => {
      dispatch(addMessage(msg.msgId, msg.content, msg.createAt, 'agente'));
    });
    this.cleanIpunt();
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const {dispatch} = this.props;
    if (this.msgInput.value) {
      let msg = {
        msgId: genId(),
        content: this.msgInput.value,
        createAt: new Date().toLocaleTimeString(),
        from: 'client'
      };  
      dispatch(addMessage(msg.msgId, msg.content, msg.createAt, "client"));
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
    const { messages } = this.props;
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
            _.values(messages).map((msg, key) => (
              <ChatMessage
                key={key}
                msg={msg.content}
                time={msg.createAt}
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