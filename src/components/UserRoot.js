import React, { Component } from 'react';
import AccountHeader from './AccountHeader';

export default class UserRoot extends Component {
    render() {
        return (
            <div className="root">
                <AccountHeader />
                <div className="root-body">
                    { this.props.children }
                </div>
            </div>
        )
    }
}