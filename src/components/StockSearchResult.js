import React from 'react';
import MaterialTable from "material-table";
import {DataGrid} from "@material-ui/data-grid";

export const StockSearchResult = ({symbolForDisplay, data}) => {

    const columns = [
        {title: 'Trade Id', field: '_id'},
        {title: 'Symbol', field: 'symbol'},
        {title: 'Trade Price', field: 'tradePrice'},
        {title: 'Time of Trade', field: 'timeStamp'},

    ];

    const columns2 = [
        { field: "_id", headerName: '_id', width: 70 },
        { field: 'symbol', headerName: 'Symbol', width: 130 },
        { field: 'tradePrice', headerName: 'Trade Price', width: 130 },
        { field: 'timeStamp', headerName: 'Time of Trade', width: 200 },
    ];

    const renderHeader = () => {
        const symbol = symbolForDisplay === undefined || symbolForDisplay === '' ? "All Trades" : symbolForDisplay
        return (
            <div>
                <h3><span data-testid={"symbol"}>{symbol}</span>
                    <br/>
                </h3>
            </div>
        )
    }

    return (
        <div className={"tables"}>
            {renderHeader()}
            <MaterialTable title={"Recent Trades"} data={data} columns={columns}/>
        </div>
    )
}