import React from 'react';
import SecureNav from './SecureNav';
import { LoginForm } from './LoginForm';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <SecureNav />
                <div>Login</div>
                <LoginForm />
            </div>
        );
    }
}