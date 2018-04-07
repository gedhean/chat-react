import React from 'react';
import './chatMessage.css';

const ChatMessage = (props) => {
    // msg is the message content
    const msg = props.msg;
    // time is the time when the msg was sent
    const time = props.time;
    // from is who sent the msg (agente or client)
    const from = props.from;
    // to set diferent styles for client and agente
    const baloonClass = `msg-container ${from}`;

    return (
        <div className={baloonClass}>
            <div className="msg-baloon">
                <div className="msg">
                    {msg}
                </div>
                <div className="msg-time">
                    {time}
                </div>
            </div>
        </div>
    );
}

export default ChatMessage;