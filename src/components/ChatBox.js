import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../redux/actions';
import ChaHeader from './ChaHeader';
import Login from './Login';
import ChatContent from './ChatContent';
import './chatBox.css';

class ChatBox extends Component {
  componentDidMount() {
    const logged = window.localStorage.getItem('isLogged');
    if (logged === 'true') {
      const {dispatch} = this.props;
      dispatch(login());
      log('O usuario já logou');
    }
  }

  render() {
    const { isLogged } = this.props;
    return (
      <div className="chat-box">
        <ChaHeader />
        {isLogged ? <ChatContent /> : <Login />}
      </div>
    );
  };
}

const mapStateToProps = store => ({
  isLogged: store.user.isLogged
});

export default connect(mapStateToProps)(ChatBox);
//Debug
const log = str => {
  console.log('At ChatBox:', str);
}