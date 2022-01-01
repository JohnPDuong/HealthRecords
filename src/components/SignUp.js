import React from 'react';
import { SecureNav } from './SecureNav';

export class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            user: undefined,
            email: undefined,
            password: undefined,
            verifyPassword: undefined,
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        alert(`Your user is: ${ this.state.user }\nYour password is: ${ this.state.password }`);
    }

    userHandler = e => {
        this.setState({ user: e.target.value });
    }

    passwordHandler = e => {
        this.setState({ password: e.target.value });
    }

    verifyPasswordHandler = e => {
        if (this.state.password != undefined)
        {

        }
        else
        {
            alert("Password is required");
        }
    }

    render() {
        return (
            <div>
                <SecureNav />
                <div>TestPage</div>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="user"
                            value={ this.state.user }
                            onChange={ this.userHandler }
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