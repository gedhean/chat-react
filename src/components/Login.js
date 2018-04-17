import React from "react";
import { connect } from "react-redux";
import io from "socket.io-client";

import { login, setSocket } from "../redux/actions";
import "./login.css";

/**
 * The socket MUST be instantiated outside the componentes!
 */
const SOCKET = io("http://localhost:8000");
const localStorage = window.localStorage;

class Login extends React.Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    const logged = localStorage.getItem("isLogged");
    if (logged === "true") {
      log("O usuario já logou");
      const { dispatch } = this.props;
      dispatch(setSocket(SOCKET));
      dispatch(login());
    } else {
      log(`User must login!`);
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("isLogged", "true");

    const { dispatch } = this.props;

    dispatch(setSocket(SOCKET));
    dispatch(login());

    log("Login submetido");
  };

  componentWillUnmount() {
    window.removeEventListener("submit", this.handleSubmit, false);
    window.removeEventListener("change", this.handleChange, false);
  }

  render() {
    return (
      <div className="form-login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            className="login-name"
            type="text"
            name="name"
            autoFocus
            required
            placeholder="Seu nome"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />
          <input
            id="email"
            className="login-email"
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <button className="login-submit-btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null)(Login);
//Debbug
const log = str => {
  console.log("At Login:", str);
};
