import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../redux/actions';
import ChatMessage from './ChatMessage';
import './chatContent.css';

class ChatContent extends Component {
    handleSubmit = event => {
        event.preventDefault();
        if (this.msgInput.value) {
            let msg = {
                content: this.msgInput.value,
                time: new Date().toLocaleTimeString(),
                from: 'client'
            }
            this.props.addMessage(
                msg.content, 
                msg.time, 
                msg.from
            );
        }
        this.cleanIpunt();
    }

    cleanIpunt = () => {
        this.msgInput.value = "";
        this.msgBody.scrollTop = this.msgBody.scrollHeight;
    }

    render() {
        const timeNow = new Date().toLocaleTimeString();
        return (
            <div className="chat-content">
                <div className="messages" ref={(body) => {this.msgBody = body;}}>
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
                        ref={(input) => {this.msgInput = input;}}
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

export default 
    connect(
        mapStoreToProps,
        { addMessage }
    )(ChatContent);