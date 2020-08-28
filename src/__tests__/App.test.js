import React from 'react';
import { useAxios } from "../components/FetchDataService";
import { render, cleanup, waitForElement } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import App from "../App";

afterEach(cleanup);

jest.mock("axios");
describe('useAxios ', () => {

    it("handles a successful response", async () => {
        //ensure its the mock by using alias
        axiosMock.get.mockResolvedValueOnce(
            {trades: [{id: 1, symbol: "ABC", tradePrice: 81.00}]}
            )

        const response = await useAxios("ABC")
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith(
             'http://localhost:8080/api/v1/trades/ABC'
         );
        //must await or it will be undefined!
        const expected = {trades: [{id: 1, symbol: "ABC", tradePrice: 81.00}]};
        await expect(response).toEqual(expected)
    });

    it('handles unsuccessful response', async () => {
        const errorMessage = "bad response"

        axiosMock.get.mockReturnValue(Promise.reject(new Error(errorMessage)))
        await expect(useAxios("ABC")).rejects.toThrow(errorMessage)
    });
});

describe('App ', () => {

    it("displays trade data correctly ", async () => {
        axiosMock.get.mockResolvedValueOnce({data: [{id: 1, symbol: "ABC", tradePrice: 81.00}]});

        const { getByRole } = render(<App/>);
        // Because the getData call (useEffect) happens after initial render
        // We need to handle the async nature of an AJAX call by waiting for the
        // element to be rendered.
        const expectedResolvedValue = await waitForElement(() => (getByRole("tradeItem")));

        expect(expectedResolvedValue).toHaveTextContent("ABC");
    });

    it('displays default post data correct', async () => {
        axiosMock.get.mockResolvedValueOnce({data: [{id: 1, symbol: "ABC", tradePrice: 81.00}]});

        //if you have multiple list items with roles
        const { getAllByRole } = render(<App/>);

        const expectedResolvedValue = await waitForElement(() => getAllByRole("post-content"));
        expect(expectedResolvedValue[0]).toHaveTextContent("BUY 200 SPY @ $210.00");
    });
});