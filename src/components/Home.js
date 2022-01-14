import React from 'react';
import { Root } from './Root';

import img from '../img/4767257.jpg'

export default class Home extends React.Component {
    render() {
        return (
            <Root>
                <div className="img-wrapper">
                    <img className="background" src= { img } />
                    <div className="background-text bgt-top">Ready For You</div>
                    <div className="background-text bgt-mid">Wherever You Are</div>
                    <div className="background-text bgt-bot">Whenever You Need</div>
                </div>
            </Root>
        );
    }
}