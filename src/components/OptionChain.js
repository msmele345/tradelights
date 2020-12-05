import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


export const OptionsChain = ( { data } ) => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'symbol', headerName: 'Stock Symbol', width: 130 },
        { field: 'month', headerName: 'Expiration Month', width: 130 },
        { field: 'strikePrice', headerName: 'Strike Price', width: 130 },
        { field: 'type', headerName: 'Type', width: 90 },
        { field: 'currentPrice', headerName: 'Current Price', width: 130 },
        { field: 'expirationDate', headerName: 'Option Ex Date', width: 200 },
    ];


    return (
        <div className={"optionChain"} >
            <DataGrid rows={data} columns={columns} pageSize={5} align="right" />
        </div>
    )
}