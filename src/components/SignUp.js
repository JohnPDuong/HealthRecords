import React from 'react';
import { SecureNav } from './SecureNav';

export class SignUp extends React.Component {
    render() {
        return (
            <div>
                <SecureNav />
                <h1>
                    This is the sign up page
                </h1>
            </div>
        );
    }
}