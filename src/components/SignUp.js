import React from 'react';
import { SecureNav } from './SecureNav';

const port = process.env.ENDPOINT_PORT || 3001;

export class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: undefined,
            password: undefined,
            verifyPassword: undefined,
        }
    }

    handleSubmit = e => {
        try {
            alert(port);
        } catch (err) {
            console.error(err);
        }
    }

    emailHandler = e => {
        console.log(port);
        this.setState({ user: e.target.value });
    }

    passwordHandler = e => {
        this.setState({ password: e.target.value });
    }

    verifyPasswordHandler = e => {
        this.setState({ verifyPassword: e.target.value });
    }

    render() {
        return (
            <div>
                <SecureNav />
                <div>TestPage</div>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={ this.state.email }
                            onChange={ this.emailHandler }
                        />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input
                            type="text"
                            name="password"
                            value={ this.state.password }
                            onChange={ this.passwordHandler }
                        />
                    </label>
                    <br/>
                    <label>
                        Confirm Password:
                        <input
                            type="text"
                            name="verifyPassword"
                            value={ this.state.verifyPassword }
                            onChange={ this.verifyPasswordHandler }
                        />
                    </label>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}