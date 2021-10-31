import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { News } from './components/News';

class App extends React.Component {
    render () {
        return (
            <Router>
                <Route exact path={ "/" } component={ Home }/>
                <Route exact path={ "/about" } component={ About }/>
                <Route exact path={ "/news" } component={ News }/>
            </Router>
            );
    }
}

render(<App/>, window.document.getElementById('app'));