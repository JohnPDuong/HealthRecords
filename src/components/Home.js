import React from 'react';
import { Root } from './Root';

import background_img from '../img/bg-health.jpeg';
import '../css/modules/Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <Root>
                <div className="img-wrapper">
                    <img className="background-img" src= { background_img } />
                    <div className="text-block">
                        <div>Ready For You</div>
                        <div>Wherever You Are</div>
                        <div>Whenever You Need</div>
                    </div>
                </div>
                <h3 className="aim-header">What is our AIM?</h3>
                <div className="row">
                    <div className="column">
                        <h4>Accessibilty</h4>
                        <p>Some words about accessibility...</p>
                    </div>
                    <div className="column">
                        <h4>Integration</h4>
                        <p>Some words about integration...</p>
                    </div>
                    <div className="column">
                        <h4>Management</h4>
                        <p>Some words about management...</p>
                    </div>
                </div>
            </Root>
        );
    }
}