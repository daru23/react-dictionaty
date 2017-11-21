import React, { Component } from 'react';

const urlForUsername = () =>
    `http://localhost:8000/words`;

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false
        }
    }

    componentDidMount() {
        fetch(urlForUsername())
            .then(response => {
                console.log(response);

                if (!response.ok) {
                    throw Error("Network request failed")
                }

                return response
            })
            .then(d => d.json())
            .then(d => {
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
        console.log(JSON.stringify(this.state.data));
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.data) return <p>Loading...</p>
        return (
            <div>
                <h2>Welcome</h2>
            </div>
        )
    }
}
