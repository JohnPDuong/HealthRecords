import React from 'react'

import './css/layout/App.css'
import './css/layout/HeaderNavBar.css'

export class HeaderNavBar extends React.Component {
    render() {
        return (
            <div className="App headerNav">
                <ul className="navbar">
                    <li><a href="default.asp">SomeRandomPage</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">About</a></li>
                    <li class = "right"><a href="about.asp">About</a></li>
                </ul>
            </div>
        );
    }
}
