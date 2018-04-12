import React from 'react';
import { connect } from 'react-redux';

import { toggleChatBox } from './redux/actions';
import ChatBox from './components/ChatBox';
import ChatLauncher from './components/ChatLauncher';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      {props.isChatBoxOpen && <ChatBox />}
      <ChatLauncher toggleChatBox={props.toggleChatBox} />
    </div>
  );
}

const mapStateToProps = store => ({
  isChatBoxOpen: store.visibilityFilter.isChatBoxOpen
});

export default connect(
  mapStateToProps, 
  { toggleChatBox }
)(App);
