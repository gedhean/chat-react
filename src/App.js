import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleChatBox } from './redux/actions';
import ChatBox from './components/ChatBox';
import ChatLauncher from './components/ChatLauncher';
import './App.css';

class App extends Component {
/*   state = {
    isChatBoxOpen: false
  }

  toggleChatBox = () => {
    this.setState({
      isChatBoxOpen: !this.state.isChatBoxOpen
    });
  } */

  render() {
    return (
      
        <div className="App">
          {this.props.isChatBoxOpen && <ChatBox />}
          <ChatLauncher toggleChatBox={this.props.toggleChatBox} />
        </div>
      
    );
  }
}

const mapStateToProps = (store) => ({
  isChatBoxOpen: store.visibilityFilter.isChatBoxOpen
});

export default connect(mapStateToProps, {toggleChatBox})(App);
