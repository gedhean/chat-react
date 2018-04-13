import React from 'react';
import { connect } from 'react-redux';

import ChatBox from './components/ChatBox';
import ChatLauncher from './components/ChatLauncher';
import './App.css';

const App = props => {
  const {isChatBoxOpen} = props;
  return (
    <div className="App">
      {isChatBoxOpen && <ChatBox />}
      <ChatLauncher />
    </div>
  );
}

const mapStateToProps = store => ({
  isChatBoxOpen: store.visibilityFilter.isChatBoxOpen
});

export default connect(
  mapStateToProps
)(App);
