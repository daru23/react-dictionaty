/**
 * Created by daru on 18/10/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

// using ES6 modules
import { hashHistory, Router, Route, Redirect } from 'react-router'

import Layout from './layout/nav-bar';

import HomePage from './pages/home'
import WordsPage from './pages/words'
import LabelsPage from './pages/labels'

const app = (
    <Router history={hashHistory}>
        <Redirect from="/" to="/home" />
        <Route path="/" component={Layout}>
            <Route path="home" component={HomePage} />
            <Route path="words" component={WordsPage} />
            <Route path="labels" component={LabelsPage} />
        </Route>
    </Router>
);


// Render when document is ready
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        app,
        document.getElementById('word-box')
    );
});