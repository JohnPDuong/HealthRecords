import React from 'react';
import { SecureNav } from './SecureNav';

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "",
            password: "",
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
                    <input type="submit" />
                </form>
            </div>
        );
    }
}