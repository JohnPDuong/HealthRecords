import React from 'react';
import { Link } from 'react-router-dom';

import '../css/layout/App.css';
import '../css/layout/HeaderNavBar.css';

export class HeaderNavBar extends React.Component {
    render() {
        return (
            <div className="App headerNav">
                <ul className="navbar">
                    <li><Link to={"/somerandommpage"}>SomeRandomPage</Link></li>
                    <li><Link to={"/news"}>News</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/"}>Home</Link></li>
                </ul>
            </div>
        );
    }
}
