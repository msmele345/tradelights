import React from 'react';
import {screen, render} from '@testing-library/react';
import {LiveQuote} from "../components/LiveQuote";

describe("LiveQuote", () => {

    it("renders bid and ask prices with header",  () => {

        const liveQuote = {
          bid: 10.05,
          ask: 10.10,
          symbol: "ABC"
        };

        render(<LiveQuote quoteData={liveQuote}/>)

        expect(screen.getByText(/ABC/)).toBeTruthy();
        expect(screen.findByText(/BID/));
        expect(screen.findByText(/SYMBOL/)).toBeTruthy();
        // const orderButton = await container.findByTestId('order-submit-button');
    });
});