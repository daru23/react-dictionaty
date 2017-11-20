/**
 * Created by daru on 18/10/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery';

// using ES6 modules
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './layout/layout';

import HomePage from './pages/home'
import WordsPage from './pages/words'
import LabelsPage from './pages/labels'

const app = (
    <Router >
        <div>
            <Route path="/" component={Layout} />
            <Route path="/home" component={HomePage} />
            <Route path="/words" component={WordsPage} />
            <Route path="/labels" component={LabelsPage} />
        </div>
    </Router>
);


// Render when document is ready
jQuery(function() {
    ReactDOM.render(
        app,
        document.getElementById('body'),
        function() {
            console.log('')
        }
    );
});