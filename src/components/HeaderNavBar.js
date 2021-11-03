import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/layout/App.css';
import '../css/layout/HeaderNavBar.css';

export class HeaderNavBar extends React.Component {
    render() {
        return (
            <div className="App nav-wrapper">
                <ul className="navbar">
                    <li><NavLink exact activeStyle={{color: "red"}} to={"/somerandompage"}>SomeRandomPage</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "red"}} to={"/news"}>News</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "red"}} to={"/about"}>About</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "red"}} to={"/"}>Home</NavLink></li>
                </ul>
            </div>
        );
    }
}
