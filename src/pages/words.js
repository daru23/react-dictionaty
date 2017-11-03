/**
 * Created by daru on 19/10/2017.
 */
import React from 'react';
// import WordBox from '../components/word-box';

export default class WPage extends React.Component {
    render() {
        return (
            <div>
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr class="info">
                            <td>Word</td>
                            <td>Translation</td>
                            <td>Is label?</td>
                            <td>Options</td>
                        </tr>
                        <tr>
                            <td>mooi</td>
                            <td>beautiful</td>
                            <td> </td>
                            <td><a href="/words/edit/1"><span class="options glyphicon glyphicon-pencil"></span></a><a href="/words/delete"><span class="options glyphicon glyphicon-trash"></span></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            // <WordBox apiUrl="localhost:8000" />

        )
    }
}