/**
 * Created by daru on 19/10/2017.
 */
import React from 'react'

export default class Layout extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home">Home</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/words">Words</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/labels">Labels</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                {this.props.children}
            </nav>
        )
    }
}