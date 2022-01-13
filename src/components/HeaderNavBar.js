import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/layout/App.css';
import '../css/layout/HeaderNavBar.css';

import img from '../img/NewHeaderLogoBlack.png';

export default class HeaderNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogoutClick() {
        this.props.handleLogout();
    }

    render() {
        return (
            <div className="container-header">
                <div className="header">he</div>
                <div className="container-nav">
                    <ul>
                        <li>
                            <NavLink 
                                exact="true" 
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "inactive-link"
                                }
                                to={ "/" }
                            >
                            Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                exact="true" 
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "inactive-link"
                                }
                                to={ "/news" }
                            >
                            News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                exact="true" 
                                className={({ isActive }) =>
                                    isActive ? "active-link" : "inactive-link"
                                }
                                to={ "/about" }
                            >
                            About
                            </NavLink>
                        </li>
                    </ul>
                    <img className="navbar-img" src={ img } />
                    <ul>
                        { !this.props.name && <li><NavLink exact="true" to={ "/login" }>Login</NavLink></li> }
                        { !this.props.name && <li><NavLink exact="true" to={ "/signup" }>Sign Up</NavLink></li> }
                        { this.props.name && <li><NavLink exact="true" to={ "/user" }>Hello, { this.props.name }</NavLink></li> }
                        { this.props.name && <li><button onClick={ this.handleLogoutClick.bind(this) }>Logout</button></li> }
                    </ul>
                </div>
            </div>
        );
    };
}
