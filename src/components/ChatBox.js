import React from 'react';
import ChaHeader from './ChaHeader';
import ChatLogin from './ChatLogin';
import './chatBox.css';

const ChatBox = (props) => {
    return (
        <div className="chat-box">
            <ChaHeader />
            <ChatLogin />
        </div>
    )
}

export default ChatBox;