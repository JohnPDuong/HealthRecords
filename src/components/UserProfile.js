import React from 'react'
import { Navigate } from 'react-router-dom';
import AccountHeader from './AccountHeader';

import '../css/layout/UserProfile.css';

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
            <div>
                <AccountHeader />
                <div className="content">
                    <h2 className="account-tabs">Profile</h2>
                    <div>First Name</div>
                    <div>{ this.state.fname }</div>
                    <div>Last Name</div>
                    <div>{ this.state.lname }</div>
                    <div>Email</div>
                    <div>{ this.state.email }</div>
                    <div>Password</div>
                    <div>************</div>
                    <div>Change Password</div>
                </div>

                <div className="footer">
                    <p>Footer</p>
                </div>


                { !sessionStorage.getItem("key") && <Navigate to="/login" replace={ true } /> }
            </div>
        )
    }
}