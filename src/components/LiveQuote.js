import React from 'react';

export const LiveQuote = ({quoteData}) => {

    const {bid, ask, symbol} = quoteData;

    return (
        <div className={"liveQuoteContainer"}>
            <h1 className={"banner"}>{symbol}</h1>
            <h2><span>BID: {bid} ASK: {ask}</span></h2>
        </div>
    );
};