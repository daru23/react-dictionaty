/**
 * Created by daru on 18/10/2017.
 */
import React  from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';

import Layout from './layout/layout'
import Dashboard from './components/dashboard'



ReactDOM.render(
    <div>
        <Layout />
        <Dashboard />
    </div>,
    document.getElementById('root')
);