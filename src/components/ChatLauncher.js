import React from 'react';
import Icons from './Icons';
import './chatLauncher.css';

class ChatLauncher extends React.Component {
    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        this.props.toggleChatBox();
    }

    render () {        
        return (
            <div className="chat-launcher" onClick={this.handleClick} style={!this.state.isOpen ? {transform: "rotate(0deg)"} : {transform: "rotate(90deg)"}}>
                {this.state.isOpen ?
                    <Icons.CloseIcon />   
                :  
                    <Icons.ChatIcon />
                }
            </div>
        );
    }
}

export default ChatLauncher;