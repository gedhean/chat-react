import React from 'react';
import { connect } from 'react-redux';

import { setLogin } from '../redux/actions';
import ChaHeader from './ChaHeader';
import Login from './Login';
import ChatContent from './ChatContent';
import './chatBox.css';

class ChatBox extends React.Component {
   /*  constructor(props) {
        super(props)

        this.state = {
            isLogged: false
        }
    } */

   /*  setLogin = () => {
        this.setState({
            isLogged: true
        }, () => {
            window.localStorage.setItem('isLogged', 'true');
        });
    }
 */
    componentDidMount() {
        const log = window.localStorage.getItem('isLogged');
       /*  if (log === 'true') {
            this.setState({
                isLogged: true
            });
            console.log('O usuario já logou');
        } */
        if (log === 'true') {
            console.log('O usuario já logou2');
            this.props.setLogin();
        }
    }

    render() {
        return (
            <div className="chat-box">
                <ChaHeader />
                {this.props.isLogged ? <ChatContent /> : null}
                {!this.props.isLogged ? <Login login={this.props.setLogin}/> : null}
            </div>
        );
    };
}

const mapStateToProps = ({ isLogged }) => ({
    isLogged
});

export default connect(mapStateToProps, { setLogin })(ChatBox);