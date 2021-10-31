import React from 'react';

import { Root } from './Root';
import { IndexBody } from './IndexBody';
import { DebugScreen } from './DebugScreen';

export class Home extends React.Component {
    render() {
        return (
            <Root>
                <IndexBody/>
                <DebugScreen/>
            </Root>
        );
    }
}