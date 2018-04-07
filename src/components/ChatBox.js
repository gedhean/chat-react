import React from 'react';
import ChaHeader from './ChaHeader';
import Login from './Login';
import ChatContent from './ChatContent';
import './chatBox.css';

export default class ChatBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: false
        }
    }

    setLogin = () => {
        this.setState({
            isLogged: true
        }, () => {
            window.localStorage.setItem('isLogged', 'true');
        });
    }

    componentDidMount() {
        const log = window.localStorage.getItem('isLogged');
        if (log === 'true') {
            this.setState({
                isLogged: true
            });
            console.log('O usuario já logou');
        }
    }

    render() {
        return (
            <div className="chat-box">
                <ChaHeader />
                {this.state.isLogged ? <ChatContent /> : null}
                {!this.state.isLogged ? <Login login={this.setLogin}/> : null}
            </div>
        );
    };
}
