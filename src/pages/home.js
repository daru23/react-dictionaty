/**
 * Created by daru on 19/10/2017.
 */
import React from 'react';

const api = 'http://localhost:8000/words';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : {},
            requestFailed : false
        }
    }

    componentDidMount() {
        fetch(api)
            .then(response =>{
                if (!response) {
                    throw Error ('Network request failed.')
                }
            })
            .then( d => d.json)
            .then( d => {
                this.setState({
                    data: d
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }

    render() {
        if(this.state.requestFailed) {
            return (
                <div>
                    Connection Failed!
                </div>
            )
        } else {
            return (
                <div>
                    Welcome to Dictionary
                </div>
            )
        }
    }
}