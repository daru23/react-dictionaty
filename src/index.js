/**
 * Created by daru on 18/10/2017.
 */
import React  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './style/style.css';
import DictionaryRouter from './routes/index'

ReactDOM.render(
    <DictionaryRouter/>,
    document.getElementById('root')
);