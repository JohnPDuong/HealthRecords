import React from 'react'
import { Navigate } from 'react-router-dom';
import UserRoot from './UserRoot';

const port = process.env.REACT_APP_ENDPOINT_PORT;

export default class UserProfile extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            fname: null,
            lname: null,
            email: null
        };
    }

    async componentDidMount()
    {
        if (sessionStorage.getItem("key")) {
            const key = sessionStorage.getItem("key");

            await fetch(`http://localhost:${ port }/api/fetch`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": key
                }
            })
            .then(res => res.json())
            .then(resJson => {
                this.setState({
                    fname: resJson.fname,
                    lname: resJson.lname,
                    email: resJson.email
                });
            });
        }
    }
    
    render() {
        return (
            <UserRoot>
                <div className="user-profile-content">
                    <h1 className="account-tabs">Profile</h1>
                    <h2>First Name</h2>
                    <p>{ this.state.fname }</p>
                    <h2>Last Name</h2>
                    <p>{ this.state.lname }</p>
                    <h2>Email</h2>
                    <p>{ this.state.email }</p>
                    <h2>Password</h2>
                    <p>************</p>
                </div>
                { !sessionStorage.getItem("key") && <Navigate to="/login" replace={ true } /> }
            </UserRoot>
        )
    }
}