import React from 'react';
import {LiveQuote} from "./LiveQuote";
import {StockProfile} from "./StockProfile";

export const StockDetailResult = ({data}) => {

    const columns = [
        {field: 'ticker', headerName: 'Stock Symbol', width: 130},
        {field: 'sector', headerName: 'Sector', width: 130},
        {field: 'price', headerName: 'Last Price', width: 130},
        {field: 'company', headerName: 'Company Name', width: 90},
        {field: 'industry', headerName: 'Industry', width: 130},
        {field: 'volume', headerName: 'Volume', width: 200},
        {field: 'yearlyHigh', headerName: '52 Week High', width: 90},
        {field: 'yearlyLow', headerName: '52 Week Low', width: 90},
        {field: 'dividendYield', headerName: 'Dividend Yield', width: 90},
        {field: 'fiftyDaySimpleMovingAverage', headerName: '50 Day SMA', width: 90},
        {field: 'twoHundredDaySimpleMovingAverage', headerName: '200 Day SMA', width: 90},
        {field: 'performanceYTD', headerName: 'YTD Performance', width: 90},
    ];

    const {stockMetadata, liveQuote} = data;

    const renderData = () => {
        if (!stockMetadata || !liveQuote) return;

        //component for demo graphics
        //component for technical indicator fields

        return (
            <div className={"detailContainer"}>
                <LiveQuote quoteData={liveQuote}/>
                <StockProfile stockMetadata={stockMetadata}/>
            </div>
        )
    };

    //pass live quote banner above or below stock details?
    return (
        <div className={"optionChain"}>
            {renderData()}
        </div>
    )
}