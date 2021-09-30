import React, { useState, useEffect } from 'react';
import HeaderBar from './HeaderBar';
import HeaderNavBar from './HeaderNavBar';
import IndexBody from './IndexBody';
import DebugScreen from './DebugScreen';

function App() {

    return (
    <>
        <HeaderBar />
        <HeaderNavBar />
        <IndexBody />
        <DebugScreen />
    </>
    )
}

export default App;