import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../img/NewHeaderLogoBlack.png';

export default class AccountHeader extends React.Component {
    render() {
        return (
            <div className="container-account-header-logo">
                <NavLink exact="true" to={ "/" }><img className="account-header-logo" src={ img }/></NavLink>
            </div>
        );
    }
}