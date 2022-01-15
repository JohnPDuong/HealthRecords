import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../img/NewHeaderLogoBlack.png';
import '../css/modules/HeaderNavBar.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogoutClick() {
        this.props.handleLogout();
    }

    render() {
        return (
            <header>
                <div className="container container-nav">
                    <div className="container-header-logo left">
                        <img className="header-logo" src={ img }/>
                    </div>
                    <div className="container-dropdown right">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className="container-list">
                        <ul className="list-links dropdown">
                            <li>
                                <NavLink 
                                    exact="true" 
                                    className={({ isActive }) =>
                                        isActive ? "active link" : "inactive link"
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
                                        isActive ? "active link" : "inactive link"
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
                                        isActive ? "active link" : "inactive link"
                                    }
                                    to={ "/about" }
                                >
                                About
                                </NavLink>
                            </li>
                            { !this.props.name && <li><NavLink className="link" exact="true" to={ "/login" }>Login</NavLink></li> }
                            { !this.props.name && <li><NavLink className="link"exact="true" to={ "/signup" }>Sign Up</NavLink></li> }
                            { this.props.name && <li><NavLink className="link" exact="true" to={ "/user" }>Hello, { this.props.name }</NavLink></li> }
                            { this.props.name && <li><button className="link" onClick={ this.handleLogoutClick.bind(this) }>Logout</button></li> }
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
}
