import React from 'react';
import { SecureNav } from './SecureNav';
import { SignUpForm } from './SignUpForm';

export class SignUp extends React.Component {
    render() {
        return (
            <div>
                <SecureNav />
                <div>TestPage</div>
                <SignUpForm/>
            </div>
        );
    }
}