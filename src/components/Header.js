import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/layout/App.css';
import '../css/layout/HeaderNavBar.css';

import img from '../img/NewHeaderLogoBlack.png';

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
                <div class="container container-nav">
                    <div class="site-img">
                        <img class="site-img" src={ img }/>
                    </div>
                    <nav>
                        <ul>
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
