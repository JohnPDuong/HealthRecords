import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../img/HealthRecordsHeader.png';
import '../css/layout/AccountHeader.css';

export default class AccountHeader extends React.Component {
    render() {
        return (
            <div className="bar">
                <NavLink exact="true" to={ "/" }><img className="logo" src={ img }/></NavLink>
            </div>
        );
    }
}