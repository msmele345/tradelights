import React from 'react';
import {shallow} from 'enzyme';
import { render, getByText, queryByText, getAllByTestId } from '@testing-library/react'
import {SearchResult} from "./SearchResult";


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
        "tradePrice": 48.76,
        "timeStamp": "2020-06-27T15:15:29.606+00:00"
    },
    {
        "id": 15,
        "bidId": 253,
        "askId": 234,
        "symbol": "JDS",
        "tradePrice": 48.76,
        "timeStamp": "2020-06-27T15:16:02.229+00:00"
    }
]


let wrapped = shallow(<SearchResult data={trades}/>);

describe('Search ', () => {

    const {getAllByRole} = render(<SearchResult data={trades}/>)

    const listItems = getAllByRole("tradeItem")
    console.log(listItems.values())

    it('should render the Trades Correctly', () => {
        expect(listItems).toHaveLength(3)
        expect(wrapped.length).toEqual(1)
    });

});