/**
 * Created by daru on 19/10/2017.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="top-menu">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/words">Words</Link>
                        </li>
                        <li>
                            <Link to="/labels">Labels</Link>
                        </li>
                    </ul>
                </div>

                {this.props.children}
            </div>
        )
    }
}