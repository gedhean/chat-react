import React from 'react';
import ChaHeader from './ChaHeader';
import ChatLogin from './ChatLogin';
import ChatContent from './ChatContent';
import './chatBox.css';

const ChatBox = (props) => {
    return (
        <div className="chat-box">
            <ChaHeader />
            <ChatContent />
            <ChatLogin />
        </div>
    )
}

export default ChatBox;