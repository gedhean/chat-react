import React, { Component } from "react";
import { connect } from "react-redux";

import ChaHeader from "./ChaHeader";
import Login from "./Login";
import ChatContent from "./ChatContent";
import "./chatBox.css";

class ChatBox extends Component {
  render() {
    const { isLogged } = this.props;
    return (
      <div className="chat-box">
        <ChaHeader />
        {isLogged ? <ChatContent /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isLogged: store.user.isLogged
});

export default connect(mapStateToProps)(ChatBox);
//Debug
const log = str => {
  console.log("At ChatBox:", str);
};
