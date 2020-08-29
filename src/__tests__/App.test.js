import React from 'react';
import {cleanup, render, waitForElement} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import App from "../App";


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

    it("renders error if server response is not a 200", async () => {

        const serverError = "server error";

        axiosMock.get.mockReturnValueOnce(Promise.reject(new Error(serverError)));

        const { getByTestId } = render(<App />)

        const actual = await waitForElement(() => getByTestId("errors"));

        expect(actual).toHaveTextContent("server error");
    });
});