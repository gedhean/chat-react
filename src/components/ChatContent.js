import React from 'react';
import ChatMessage from './ChatMessage';
import './chatContent.css';

export default class ChatContent extends React.Component {
    state = {
        messages: [],
        currentMsg: null
    };

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            currentMsg: {
                [event.target.id]: event.target.value,
                time: new Date().toLocaleTimeString(),
                from: "client"
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.msgInput.value) {
            this.setState({
                messages: this.state.messages.concat([
                    this.state.currentMsg
                ])
            }, () => {
                this.msgInput.value = "";
                this.msgBody.scrollTop = this.msgBody.scrollHeight;
            });
        }
    }

    render() {
        return (
            <div className="chat-content">
                <div className="messages" ref={(body) => {this.msgBody = body;}}>
                    <ChatMessage
                        msg={"Olá"}
                        time={new Date().toLocaleTimeString()}
                        from={"agente"}
                    />
                    <ChatMessage
                        msg={"Preciso da sua ajuda."}
                        time={new Date().toLocaleTimeString()}
                        from={"client"}
                    />
                    <ChatMessage
                        msg={"Antes de tudo, preciso de algumas informações. Por Favor, digite seu CPF e númoro de conta."}
                        time={new Date().toLocaleTimeString()}
                        from={"agente"}
                    />
                    {
                        this.state.messages.map((msg, key) => (
                            <ChatMessage
                                key={key}
                                msg={msg.msg}
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