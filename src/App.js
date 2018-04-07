import React, { Component } from 'react';
import ChatBox from './components/ChatBox';
import ChatLauncher from './components/ChatLauncher';
import './App.css';

class App extends Component {
  state = {
    isChatBoxOpen: false
  }

  toggleChatBox = () => {
    this.setState({
      isChatBoxOpen: !this.state.isChatBoxOpen
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isChatBoxOpen && <ChatBox />}
        <ChatLauncher toggleChatBox={this.toggleChatBox} />
      </div>
    );
  }
}

export default App;
