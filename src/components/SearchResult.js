
import React from 'react';

export const SearchResult = ({ symbolForDisplay, data }) => {
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

    return (<>
        {renderHeader()}
        <ul >
            {data.map(trade => (
                <li key={trade.id}>
                    <a role={"tradeItem"}>{trade.symbol} - ${trade.tradePrice}</a>
                </li>
            ))}
        </ul>
    </>);
}