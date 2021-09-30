import React, { useState, useEffect } from 'react';
import HeaderLogo from './HeaderBar';
import HeaderNavBar from './HeaderNavBar';
import IndexBody from './IndexBody';

function App() {

    return (
    <>
        <HeaderLogo />
        <HeaderNavBar />
        <IndexBody />
    </>
    )
}

export default App;