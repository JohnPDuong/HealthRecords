import React from 'react';
import SecureNav from './SecureNav';
import { LoginForm } from './LoginForm';

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