import React from 'react';

import { HeaderBar } from './HeaderBar';
import { HeaderNavBar } from './HeaderNavBar';

export class Root extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar />
                <HeaderNavBar />
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}