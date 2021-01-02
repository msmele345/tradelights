import React from 'react';

export const StockProfile = ({stockMetadata}) => {

    const formatValues = (number) => {
        if (!number) {
            return number * 100
        }
    }

    return (
        <div className={"stockProfile"}>
            <ul className={"stockDetailProperties"}>
                <li>Sector: <span>{stockMetadata.sector}</span></li>
                <li>Company Name: <span>{stockMetadata.company}</span></li>
                <li>Volume: <span>{stockMetadata.volume}</span></li>
                <li>Dividend Yield: <span>{stockMetadata.dividendYield}</span></li>
                <li>Performance YTD: <span>{stockMetadata.performanceYTD * 100}%</span></li>
                <li>200 Day Simple Moving Avg: <span>{stockMetadata.twoHundredDaySimpleMovingAverage}</span></li>
                {/*<li>52 Week High: <span>{stockMetadata.yearlyHigh * 100}</span></li>*/}
                {/*<li>52 Week Low: <span>{stockMetadata.yearlyLow * 100}</span></li>*/}
            </ul>
        </div>
    )
};