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
                    <img className="background" src={img} />
                </div>
                <DebugScreen/>
            </Root>
        );
    }
}