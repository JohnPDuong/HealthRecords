import React from 'react'
import { Navigate } from 'react-router-dom';
import UserRoot from './UserRoot';
import FormData from 'form-data';

const port = process.env.REACT_APP_ENDPOINT_PORT;

export default class UserProfile extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            fname: null,
            lname: null,
            email: null,
            image: null
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

    handleFileChange = e => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }

        this.setState({
            image: img
        });
    }

    onSubmit = async e => {
        e.preventDefault();

        document.getElementById("submitBtn").disabled=true;

        let formData = new FormData();

        formData.append("file", this.state.image.data);

        console.log(this.state.image);
        
        await fetch(`http://localhost:${[ port ]}/api/upload-request`, {
            method: "POST",
            headers: {
                "Authorization": sessionStorage.getItem("key"),
            },
            body: formData,
        })
        .then(res => res.json())
        .then(resJson => {

        })
        .catch(error => console.log("Auth failed: " + error.message));

        document.getElementById("submitBtn").disabled=false;
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
                    <p>Upload a file</p>
                    { this.state.image && <img src={ this.state.image.preview } width="100" height="100" /> }
                    <form onSubmit={ this.onSubmit }>
                        <input type="file" name="image" onChange={ this.handleFileChange } />
                        <button type="submit" id="submitBtn">Submit</button>
                    </form>
                </div>
                { !sessionStorage.getItem("key") && <Navigate to="/login" replace={ true } /> }
            </UserRoot>
        )
    }
}