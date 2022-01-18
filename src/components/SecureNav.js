import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../img/NewHeaderLogoBlack.png';
import '../css/modules/SecureNav.css';

export default class SecureNav extends React.Component {
    render() {
        return (
            <div className="container-secure-nav">
                <NavLink exact="true" to={ "/" }><img className ="secure-nav-img" src={ img }/></NavLink>
            </div>
        );
    }
}