import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import SomeRandomPage from './components/SomeRandomPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';

import './css/layout/App.css';

class App extends React.Component {
    render () {
        return (
            <Router>
                <Routes>
                    <Route exact path={ "/" } element={ <Home /> }/>
                    <Route exact path={ "/about" } element={ <About /> }/>
                    <Route exact path={ "/news" } element={ <News /> }/>
                    <Route exact path={ "/somerandompage" } component={ <SomeRandomPage /> }/>
                    <Route exact path={ "/login" } element={ <Login /> }/>
                    <Route exact path={ "/signup" } element={ <SignUp /> }/>
                    <Route exact path={ "/user" } element={ <UserProfile /> } />
                </Routes>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById('app'));