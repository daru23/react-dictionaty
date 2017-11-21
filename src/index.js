/**
 * Created by daru on 18/10/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery';

// using ES6 modules
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Components
import Home from './components/Home';

const app = (
    <Router >
            <Route path="/home" component={Home} />
    </Router>
);


// Render when document is ready
jQuery(function() {
    ReactDOM.render(
        app,
        document.getElementById('body'),
        function() {
            //console.log('')
        }
    );
});