import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../redux/actions';
import ChaHeader from './ChaHeader';
import Login from './Login';
import ChatContent from './ChatContent';
import './chatBox.css';

class ChatBox extends Component {
    componentDidMount() {
        const log = window.localStorage.getItem('isLogged');
        if (log === 'true') {
            console.log('O usuario já logou');
            this.props.login(true);
        }
    }

    render() {
        return (
            <div className="chat-box">
                <ChaHeader />
                {this.props.isLogged ? <ChatContent /> : null}
                {!this.props.isLogged ? <Login login={this.props.login}/> : null}
            </div>
        );
    };
}

const mapStateToProps = store => ({
    isLogged: store.user.isLogged
});

export default connect(mapStateToProps, { login })(ChatBox);