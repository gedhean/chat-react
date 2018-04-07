import React from 'react';
import ChaHeader from './ChaHeader';
import Login from './Login';
import ChatContent from './ChatContent';
import './chatBox.css';

const ChatBox = (props) => {
    return (
        <div className="chat-box">
            <ChaHeader />
            <ChatContent />
            <Login />
        </div>
    )
}

export default ChatBox;