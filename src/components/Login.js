import React from 'react';
import './login.css';

export default class Login extends React.Component {
    state = {
        name: '',
        email: '',
        loginVisibility: true
    }

    handleChange = (event) => {
        const eventName = event.target.name;
        if (eventName !== 'loginVisibility') {
            this.setState({
                [eventName]: event.target.value
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loginVisibility: false
        });
        console.log('Submetido');
    }

    render() {
        return this.state.loginVisibility && (
            <div className="form-login">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    {/* <label htmlFor="name">Nome</label>
                    <br/> */}
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
                    {/* <br/>
                    <label htmlFor="email">E-mail</label> */}
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