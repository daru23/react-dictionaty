import React from 'react';

export default class Word extends React.Component {

    render() {
        return (
            <tr>
                <td>mooi</td>
                <td>beautiful</td>
                <td> </td>
                <td><a href="/words/edit/1"><span class="options glyphicon glyphicon-pencil"></span></a><a href="/words/delete"><span class="options glyphicon glyphicon-trash"></span></a>
                </td>
            </tr>
        );
    }

}