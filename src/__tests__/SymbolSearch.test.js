import React from 'react';
import {fireEvent, render, screen, waitForElement} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import {SymbolSearch} from "../components/SymbolSearch";


describe('SymbolSearch', () => {


    it("renders input correctly", async () => {

        const setQuery = jest.fn()
        const setSearch = jest.fn()

       render(<SymbolSearch query={''} setQuery={setQuery} setSearch={setSearch}/>);

        const button = screen.getByRole('button', {name: /Search/i} );
        expect(button).toBeEnabled();

        const textInput = screen.getByLabelText("symbol-input");
        fireEvent.change(textInput, {target: {value: "TTY"}});
        console.log(textInput)
        // fireEvent.click(button)

        // const actual = await waitForElement(() => screen.getByPlaceholderText("Symbol i.e..ABC"))
        // screen.getByRole("blah")
        expect(textInput).toHaveTextContent("TTY")
    });
});


