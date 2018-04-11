import React from 'react';
import './chatMessage.css';

const ChatMessage = ({
    msg,    // msg is the message content
    time,   // time is the time when the msg was sent
    from    // from is who sent the msg (agente or client)
}) => {
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