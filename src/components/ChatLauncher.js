import React from "react";
import { connect } from "react-redux";

import { toggleChatBox } from "../redux/actions";
import Icons from "./Icons";
import "./chatLauncher.css";

class ChatLauncher extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    const { dispatch } = this.props;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
    dispatch(toggleChatBox());
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div
        className="chat-launcher"
        onClick={this.handleClick}
        style={
          !this.state.isOpen
            ? { transform: "rotate(0deg)" }
            : { transform: "rotate(90deg)" }
        }
      >
        {this.state.isOpen ? <Icons.CloseIcon /> : <Icons.ChatIcon />}
      </div>
    );
  }
}

export default connect(null)(ChatLauncher);
