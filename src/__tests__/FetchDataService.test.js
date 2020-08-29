import React from "react";
import mockAxios from "axios"
import { useAxios } from "../components/FetchDataService";

describe("api calls", () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("handles a successful response", async () => {

        const serverResponse = {trades: [{id: 1, symbol: "ABC", tradePrice: 81.00}]};
        mockAxios.get.mockReturnValue(serverResponse);

        const response = await useAxios("ABC");

        expect(mockAxios.get).toHaveBeenCalled();

        expect(response).toEqual(serverResponse);
    });

    it("handles error from server", async () => {

        const serverError = "server error";

        mockAxios.get.mockReturnValue(Promise.reject(new Error(serverError)));
        //usually, you have to use rejects or resolves anytime you return a promise from mock

        const expected = {error: serverError}
        const actual = await useAxios("ABC")
        expect(actual).toEqual(expected)
    });
});

