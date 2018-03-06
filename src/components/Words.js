/**
 * Created by daru on 05/03/2017.
 */
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];

const products = [
    {id: 1, name: "daniela", price:23}
];

export default class Words extends React.Component {
    render() {
        return (
            <BootstrapTable
                keyField="id"
                data={ products }
                columns={ columns }
                cellEdit={ cellEditFactory({ mode: 'click' }) }
            />
        )
    }
}