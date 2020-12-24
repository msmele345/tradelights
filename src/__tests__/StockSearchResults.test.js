import React from 'react';
import {shallow, mount} from 'enzyme'
import { StockSearchResult } from "../components/StockSearchResult";
import MaterialTable, {MTableCell} from "material-table";


describe('Search ', () => {


    let wrapper;

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


    it('should render the Trades Correctly', () => {

        wrapper = mount(<StockSearchResult data={trades} symbolForDisplay={"JDS"}/>)


        const table = wrapper.find(MaterialTable);
        const cell = wrapper.find(MTableCell);
        const rows = table.find('tr');

        const trade1 = rows.at(1).text();
        const trade2 = rows.at(2).text();
        const trade3 = rows.at(3).text();
        console.log(wrapper.debug())

        expect(table).toHaveLength(1)
        expect(rows).toHaveLength(8)
        expect(trade1).toEqual("JDS48.762020-06-27T15:14:52.416+00:00")
        expect(trade2).toEqual("JDS48.782020-06-27T15:15:29.606+00:00")
        expect(trade3).toEqual("JDS48.812020-06-27T15:16:02.229+00:00")
    });
});