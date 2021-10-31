import React from 'react'

import img from './img/4767257.jpg'

import './css/layout/App.css'
import './css/layout/Background.css'

export class IndexBody extends React.Component {
    render() {
        return (
            <div className="App img-wrapper">
                <img className="background" src={img} />
            </div>
        );
    }
}
