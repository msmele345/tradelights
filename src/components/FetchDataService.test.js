import React from "react";
import mockAxios from "axios"
import {useAxios} from "./FetchDataService";

describe("api calls", () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("handles a successfull response", async () => {

        mockAxios.get = jest.fn().mockResolvedValueOnce({trades: [{id: 1, symbol: "ABC", tradePrice: 81.00}]})
        await useAxios("ABC")
        expect(mockAxios.get).toHaveBeenCalledTimes();
    })
})

