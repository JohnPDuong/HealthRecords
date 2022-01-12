import React from 'react';

import HeaderNavBar from './HeaderNavBar';

export class Root extends React.Component {
    constructor() {
        super();

        this.state = {
            name: null
        };
    }

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
                this.setState({ 
                    name: resJson,
                    loggedIn: true
                });
            })
            .catch(error => {
                sessionStorage.removeItem("key");
            });
        }
    }

    handleLogout = async () => {
        const key = sessionStorage.getItem("key");
        sessionStorage.removeItem("key");

        this.setState({ 
            name: null
        });

        await fetch(`http://localhost:${ process.env.REACT_APP_AUTH_SERVER_PORT }/api/token`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": key
            }
        });
    };

    render() {
        return (
            <div style={{ height: "100%" }}>
                <HeaderNavBar 
                    name={ this.state.name } 
                    handleLogout={ this.handleLogout.bind(this) }
                />
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}