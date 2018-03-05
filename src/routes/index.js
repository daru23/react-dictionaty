/**
 * Created by daru on 21/11/2017.
 */
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Words from "../components/Words";
import Labels from "../components/Labels";
import Login from "../components/Login"
import Layout from '../layout/Layout';

export default class DictionaryRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Layout/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/words" component={Words}/>
                    <Route path="/labels" component={Labels}/>
                    <Route path="/topics" component={Login}/>
                </div>
            </Router>
        )
    }
}