import React from 'react';
import SecureNav from './SecureNav';
import { LoginForm } from './LoginForm';
import '../css/modules/LoginReg.css';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <SecureNav />
                <div className="login-reg-header">Login</div>
                <LoginForm />
            </div>
        );
    }
}