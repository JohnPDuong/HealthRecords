import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../img/generic-logo.jpg';

export class SecureNav extends React.Component {
    render() {
        return (
            <NavLink exact to={ "/" }><img src={ img }/></NavLink>
        );
    }
}