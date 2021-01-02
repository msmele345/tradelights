import React from 'react';

export const StockProfile = ({stockMetadata}) => {

    const listItemStyle = {
        color: '#0EABA0',
        size: 20
    };

    return (
        <div className={"stockProfile"}>
            <ul>
                <li style={listItemStyle}><span>Sector: {stockMetadata.sector}</span></li>
                <li style={listItemStyle}><span>Company Name: {stockMetadata.company}</span></li>
                <li style={listItemStyle}><span>Volume: {stockMetadata.volume}</span></li>
                <li style={listItemStyle}><span>Dividend Yield: {stockMetadata.dividendYield}</span></li>
                <li style={listItemStyle}><span>Performance YTD: {stockMetadata.performanceYTD}</span></li>
                <li style={listItemStyle}><span>200 Day Simple Moving Avg: {stockMetadata.performanceYTD}</span></li>
                <li style={listItemStyle}><span>52 Week High: {stockMetadata.yearlyHigh}</span></li>
                <li style={listItemStyle}><span>52 Week Low: {stockMetadata.yearlyLow}</span></li>
            </ul>
        </div>
    )
};