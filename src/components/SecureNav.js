import React from 'react';
import { NavLink } from 'react-router-dom';

import img from '../img/generic-logo.jpg';

export default class SecureNav extends React.Component {
    render() {
        return (
            <NavLink exact="true" to={ "/" }><img src={ img }/></NavLink>
        );
    }
}