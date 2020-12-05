import React from 'react';
import {render} from "@testing-library/react"
import {OptionsChain} from "../components/OptionChain";


describe("OptionsChain", () => {

    const options = [
        {
            "id": 1,
            "symbol": "ABC",
            "month": "JULY",
            "strikePrice": 22.5,
            "type": "PUT",
            "currentPrice": 2.50,
            "expirationDate": "2020-06-27T15:14:52.416+00:00"

        },
        {
            "id": 2,
            "symbol": "ABC",
            "month": "SEPT",
            "strikePrice": 23.0,
            "type": "CALL",
            "currentPrice": 1.25,
            "expirationDate": "2020-06-27T15:14:52.416+00:00"
        }
    ];

    it("renders the headers of the table correctly", () => {

       const { getAllByText } = render(<OptionsChain data={options} />)

        const header = getAllByText("Stock Symbol")
        const header2 = getAllByText("ID")
        const header3 = getAllByText("Expiration Month")


        expect(header).toBeDefined()
        expect(header2).toBeDefined()
        expect(header3).toBeDefined()
    });


    it("renders an both options in a list", () => {

        const { getAllByRole } = render(<OptionsChain data={options} />);

        const optionsChain = getAllByRole("grid");

        expect(optionsChain).toHaveLength(1);
        // expect(optionsList[0].textContent).toEqual("Symbol:ABC Month:JULY StrikePrice:22.5 Type: PUT");
        // expect(optionsList[1].textContent).toEqual("Symbol:ABC Month:SEPT StrikePrice:23 Type: CALL");
    });

});