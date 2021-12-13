import React from 'react';
import { SecureNav } from './SecureNav';

export class Login extends React.Component {
    render() {
        return (
            <div>
                <SecureNav />
                <h1>
                    This is the login page
                </h1>
            </div>
        );
    }
}