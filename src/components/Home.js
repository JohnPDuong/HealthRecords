import React from 'react';
import { Root } from './Root';

import background_img from '../img/bg-health.jpeg';

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
                <div className="row main-aim">
                    <div className="column divider">
                        <div className="main-aim-text">
                            <h4 className="main-aim-text-header">Accessibilty</h4>
                            <ul>
                                <li>Providing accurate, up-to-date, and complete information about patients at the point of care</li>
                                <li>Enabling quick access to patient records for more coordinated, efficient care</li>
                                <li>Enabling safer, more reliable prescribing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column divider">
                        <div className="main-aim-text">
                            <h4 className="main-aim-text-header">Integration</h4>
                            <ul>
                                <li>Helping promote legible, complete documentation to other clinics and clinicians</li>
                                <li>Improving patient and provider interaction and communication, as well as health care convenience</li>
                                <li>Helping providers improve productivity and work-life balance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="main-aim-text">
                            <h4 className="main-aim-text-header">Management</h4>
                            <ul>
                                <li>Enhancing privacy and security of patient data</li>
                                <li>Helping promote legible, complete documentation and accurate, streamlined coding and billing</li>
                                <li>Reducing costs through decreased paperwork, improved safety, reduced duplication of testing, and improved health.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Root>
        );
    }
}