import React from 'react';

import { Root } from './Root';
import { DebugScreen } from './DebugScreen';

import img from '../img/4767257.jpg'

import '../css/layout/App.css'
import '../css/layout/Background.css'

export class Home extends React.Component {
    render() {
        return (
            <Root>
                <div className="App img-wrapper">
                    <img className="background img" src= { img } />
                    <div className="background-text bgt-top">Ready For You</div>
                    <div className="background-text bgt-mid">Wherever You Are</div>
                    <div className="background-text bgt-bot">Whenever You Need</div>
                </div>
                <DebugScreen/>
            </Root>
        );
    }
}