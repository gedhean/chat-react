import React from 'react';
import { connect } from 'react-redux';

import { login } from '../redux/actions';
import './login.css';

class Login extends React.Component {
    state = {
        name: '',
        email: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        const {dispatch} = this.props;
        event.preventDefault();
        dispatch(login());
        log('Login submetido');
    }

    componentWillUnmount() {
       window.removeEventListener('submit', this.handleSubmit, false);
       window.removeEventListener('change', this.handleChange, false);
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
                    <br/>
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
                    <br/>
                    <button
                        className="login-submit-btn" 
                        type="submit"
                    >Entrar</button>
                </form>
            </div>
        );
    }
}

export default connect(null)(Login);

const log = str => {
    console.log('At Login:', str);
}