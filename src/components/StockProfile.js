import React from 'react';

export const StockProfile = ({stockMetadata}) => {

    const listItemStyle = {
        color: '#0EABA0',
        fontStyle: 'bold'
    };

    return (
        <div className={"stockProfile"}>
            <ul className={"stockDetailProperties"}>
                <li>Sector: <span>{stockMetadata.sector}</span></li>
                <li>Company Name: <span>{stockMetadata.company}</span></li>
                <li>Volume: <span>{stockMetadata.volume}</span></li>
                <li>Dividend Yield: <span>{stockMetadata.dividendYield}</span></li>
                <li> Performance YTD:<span>{stockMetadata.performanceYTD}</span></li>
                <li>200 Day Simple Moving Avg: <span>{stockMetadata.performanceYTD}</span></li>
                <li>52 Week High: <span>{stockMetadata.yearlyHigh}</span></li>
                <li>52 Week Low: <span>{stockMetadata.yearlyLow}</span></li>
            </ul>
        </div>
    )
};