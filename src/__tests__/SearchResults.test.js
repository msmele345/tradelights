import React from 'react';
import { render } from '@testing-library/react'
import { SearchResult } from "../components/SearchResult";


describe('Search ', () => {
    const trades = [
        {
            "id": 11,
            "bidId": 253,
            "askId": 234,
            "symbol": "JDS",
            "tradePrice": 48.76,
            "timeStamp": "2020-06-27T15:14:52.416+00:00"
        },
        {
            "id": 13,
            "bidId": 253,
            "askId": 234,
            "symbol": "JDS",
            "tradePrice": 48.78,
            "timeStamp": "2020-06-27T15:15:29.606+00:00"
        },
        {
            "id": 15,
            "bidId": 253,
            "askId": 234,
            "symbol": "JDS",
            "tradePrice": 48.81,
            "timeStamp": "2020-06-27T15:16:02.229+00:00"
        }
    ]

    const {getAllByRole, getByTestId} = render(<SearchResult symbolForDisplay={"JDS"} data={trades}/>)

    const listItems = getAllByRole("tradeItem");
    const symbol = getByTestId("symbol")

    it('should render the Trades Correctly', () => {
        expect(listItems).toHaveLength(3);

        expect(listItems[0].textContent).toEqual("JDS - $48.76");
        expect(listItems[1].textContent).toEqual("JDS - $48.78");
        expect(listItems[2].textContent).toEqual("JDS - $48.81");

        expect(symbol.textContent).toEqual("JDS");
    });
});