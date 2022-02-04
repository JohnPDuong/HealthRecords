import React from 'react';
import SecureNav from './SecureNav';
import { RegistrationForm } from './RegistrationForm';

export default class Registration extends React.Component {
    render() {
        return (
            <div>
                <SecureNav />
                <div className="login-reg-header">Registration</div>
                <RegistrationForm />
            </div>
        );
    }
}