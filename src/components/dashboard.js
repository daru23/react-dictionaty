/**
 * Created by daru on 02/03/2018.
 */
import React from 'react'
import { Table } from 'reactstrap';
import { FlexyFlipCard } from 'flexy-flipcards'

let words = [
    {"front" : 1, "back" : 2},
    {"front" : 3, "back" : 4},
    {"front" : 5, "back" : 6},
    {"front" : 7, "back" : 8},
    {"front" : 9, "back" : 10},
    {"front" : 11, "back" : 12},
    {"front" : 13, "back" : 14},
    {"front" : 15, "back" : 16},
    {"front" : 17, "back" : 18},
    {"front" : 19, "back" : 20},
];

let frontBackgroundColor = "#fff";
let backBackgroundColor = "#fff";

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let arrays = [];
        let size = 5;
        while (words.length > 0)
            arrays.push(words.splice(0, size));

        let lines = arrays.map((array, x) => {
            return (
                <tr key={x}>
                    {
                        array.map((item, y) => {
                            return (
                                <td key={y}>
                                    <FlexyFlipCard frontBackgroundColor={frontBackgroundColor} backBackgroundColor={backBackgroundColor} >
                                        <div ref='flipper' className="flip-card">
                                            {item.front}
                                        </div>
                                        <div ref='flipper' className="flip-card-back">
                                            {item.back}
                                        </div>
                                    </FlexyFlipCard>
                                </td>
                            )
                        })
                    }
                </tr>
            )
        });

        return (
            <Table responsive>
                <tbody>
                {lines}
                </tbody>
            </Table>
        );
    }

}
