import React from 'react'
import './css/layout/HeaderNavBar.css'

export default function HeaderNavBar() {
    return (
    <ul>
        <li><a href="default.asp">SomeRandomPage</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">About</a></li>
        <li class = "right"><a href="about.asp">About</a></li>
    </ul>
    )
}
