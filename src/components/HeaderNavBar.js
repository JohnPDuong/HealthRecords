import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/layout/App.css';
import '../css/layout/HeaderNavBar.css';

export default class HeaderNavBar extends React.Component {
    constructor()
    {
        super();

        this.state = {
            name: null
        };
    };

    async componentDidMount() {
        if (sessionStorage.getItem("key"))
        {
            const key = sessionStorage.getItem("key");

            await fetch(`http://localhost:${ process.env.REACT_APP_ENDPOINT_PORT }/api/fetch`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": key
                }
            })
            .then(res => res.json())
            .then(resJson => {
                this.setState({ name: resJson });
            });
        }
    }

    logout = async () => {
        const key = sessionStorage.getItem("key");

        await fetch(`http://localhost:3002/api/token`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": key
            }
        })
        .then(() => {
            this.setState({ name: null });
            sessionStorage.removeItem("key");
        });
    }

    render() {
        return (
            <div>
                <div className="header">

                </div>
                <div className="App nav-wrapper">
                <ul className="navbar">
                    <li><NavLink exact="true" activestyle={{ color: "red" }} to={ "/" }>Home</NavLink></li>
                    <li><NavLink exact="true" activestyle={{ color: "red" }} to={ "/news" }>News</NavLink></li>
                    <li><NavLink exact="true" activestyle={{ color: "red" }} to={ "/about" }>About</NavLink></li>
                    { !this.state.name && <li><NavLink exact="true" to={ "/login" }>Login</NavLink></li> }
                    { !this.state.name && <li><NavLink exact="true" to={ "/signup" }>Sign Up</NavLink></li> }
                    { this.state.name && <li><NavLink exact="true" to={ "/user" }>Hello, { this.state.name }</NavLink></li> }
                    { this.state.name && <li><button onClick={ this.logout.bind(this) }>Logout</button></li> }
                </ul>
                </div>
            </div>
        );
    }
}
