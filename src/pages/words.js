/**
 * Created by daru on 19/10/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom'

// import WordBox from '../components/word-box';

export default class WordPage extends React.Component {

    render() {
        return (
            <div>
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr className="info">
                            <td>Word</td>
                            <td>Translation</td>
                            <td>Is label?</td>
                            <td>Options</td>
                        </tr>
                        <tr>
                            <td>mooi</td>
                            <td>beautiful</td>
                            <td> </td>
                            <td>
                                <Link to="/words/edit/1">
                                    {/*<span class="options glyphicon glyphicon-pencil"></span>*/}
                                </Link>
                                <Link to="/words/delete">
                                    {/*<span class="options glyphicon glyphicon-trash"></span>*/}
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            // <WordBox apiUrl="localhost:8000" />

        )
    }
}