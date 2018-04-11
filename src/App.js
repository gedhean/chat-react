import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import  store  from './redux/store/store';
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
      <Provider store={store}>
        <div className="App">
          {this.props.isChatBoxOpen && <ChatBox />}
          <ChatLauncher toggleChatBox={this.props.toggleChatBox} />
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = ({isChatBoxOpen}) => ({
  isChatBoxOpen
});

export default connect(mapStateToProps, {toggleChatBox})( App );
