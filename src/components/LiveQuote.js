import React from 'react';

export const LiveQuote = ({quoteData}) => {

    const {bid, ask, symbol} = quoteData;

    return (
        <div className={"liveQuoteContainer"}>
            <h1 className={"quoteBanner"}>{symbol}</h1>
            <span className={"blink-bg"}>BID: {bid} ASK: {ask}</span>
        </div>
    );
};