import React from 'react';

import { HeaderNavBar } from './HeaderNavBar';

export class Root extends React.Component {
    render() {
        return (
            <div>
                <HeaderNavBar />
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}