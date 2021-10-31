import React from 'react';
import { HeaderBar } from './HeaderBar';
import { HeaderNavBar } from './HeaderNavBar';
import { IndexBody } from './IndexBody';
import { DebugScreen } from './DebugScreen';
import { render } from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <>
                <HeaderBar />
                <HeaderNavBar />
                <IndexBody />
                <DebugScreen />
            </>
            );
    }
}

render(<App/>, window.document.getElementById('app'));