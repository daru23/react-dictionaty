/**
 * Created by daru on 18/10/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery';

// using ES6 modules
import { HashRouter as Router, Route, hashHistory } from 'react-router-dom';

import Layout from './layout/layout';

import HomePage from './pages/home'
import WordsPage from './pages/words'
import LabelsPage from './pages/labels'

const app = (
    <Router history={hashHistory} >
        <Layout>
            <Route path="/home" component={HomePage} />
            <Route path="/words" component={WordsPage} />
            <Route path="/labels" component={LabelsPage} />
        </Layout>
    </Router>
);


// Render when document is ready
jQuery(function() {
    ReactDOM.render(
        //<h3>Hola Mundo</h3>,
        app,
        document.getElementById('word-box'),
        function() {
            console.log('hola coca cola')
        }
    );
});