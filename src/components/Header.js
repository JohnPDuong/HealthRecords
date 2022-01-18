import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <header className="main-page-header">
                <div className="container container-nav">
                    <div className="container-header-logo left">
                        <img className="header-logo" src={ img }/>
                    </div>
                    <input className="toggle-dropdown" type="checkbox" />
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
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
                        { !this.props.name && <li><NavLink className="link"exact="true" to={ "/registration" }>Register</NavLink></li> }
                        { this.props.name && <li><NavLink className="link" exact="true" to={ "/user" }>Hello, { this.props.name }</NavLink></li> }
                        { this.props.name && <li><button className="link" onClick={ this.handleLogoutClick.bind(this) }>Logout</button></li> }
                    </ul>
                </div>
            </header>
        );
    };
}
