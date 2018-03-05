/**
 * Created by daru on 21/11/2017.
 */
import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={"/home"}>Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to={"/words"}>Words</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/labels"}>Labels</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                {this.props.children}
            </nav>
        )
    }
}