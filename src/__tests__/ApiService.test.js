import React from "react";
import mockAxios from "axios"
import {
    getOptionsData, getPosts,
    getStockDetails,
    postOptionsData,
    postRegistrationData,
    useAxios
} from "../components/ApiService";
import axios from "../__mocks__/axios";

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

    it("postRegistrationData - submits post to backend with correct user data", async () => {

        let registrationUrl = "http://localhost:8081/api/v1/users";

        const requestBody = {
            username: "mm",
            password: "mm23",
            email: "mm@google.com"
        }
        mockAxios.post.mockReturnValue({});

        //usually, you have to use rejects or resolves anytime you return a promise from mock
        await postRegistrationData("mm", "mm23", "mm@google.com")
        expect(mockAxios.post).toHaveBeenCalledWith(registrationUrl, requestBody)
    });

    it("postRegistrationData - returns Error if there is an issue with the server", async () => {

        const serverError = "server error";

        mockAxios.post.mockReturnValue(Promise.reject(new Error(serverError)));
        const expected = {"error": "server error"};

        //usually, you have to use rejects or resolves anytime you return a promise from mock
        const actual = await postRegistrationData("mm", "mm23", "mm@google.com")
        expect(actual).toEqual(expected);
    });

    it("getOptionsData - calls /options when no query param is provided", async () => {

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

        const serverResponse = {options: options};
        mockAxios.get.mockReturnValue(serverResponse);

        const actual = await getOptionsData({});


        const optionsUrlWithNoParams = "http://localhost:8081/api/v1/options";


        expect(mockAxios.get).toHaveBeenCalledWith(optionsUrlWithNoParams);
        expect(actual).toEqual(serverResponse);

    });

    it("appends the options type as a query param when the arg is provided and truthy", async () => {
        const options = [
            {
                "id": 1,
                "symbol": "ABC",
                "month": "JULY",
                "strikePrice": 22.0,
                "type": "PUT",
                "currentPrice": 2.50,
                "expirationDate": "2020-06-27T15:14:52.416+00:00"

            },
            {
                "id": 2,
                "symbol": "ABC",
                "month": "SEPT",
                "strikePrice": 23.0,
                "type": "PUT",
                "currentPrice": 1.25,
                "expirationDate": "2020-06-27T15:14:52.416+00:00"
            }
        ];

        const serverResponse = {options: options};
        mockAxios.get.mockReturnValue(serverResponse);

        const actual = await getOptionsData("PUT");

        const optionsUrl = "http://localhost:8081/api/v1/options";

        expect(actual).toEqual(serverResponse);
        expect(mockAxios.get).toHaveBeenCalledWith(optionsUrl);
    });

    it("postOptionsData - takes request object and passes it to post ", async () => {
        const options = [
            {
                "id": 1,
                "symbol": "ABC",
                "month": "JULY",
                "strikePrice": 22.0,
                "type": "PUT",
                "currentPrice": 2.50,
                "expirationDate": "2020-06-27T15:14:52.416+00:00"

            },
            {
                "id": 2,
                "symbol": "ABC",
                "month": "SEPT",
                "strikePrice": 23.0,
                "type": "PUT",
                "currentPrice": 1.25,
                "expirationDate": "2020-06-27T15:14:52.416+00:00"
            }
        ];

        const optionsData = {
            type: 'PUT',
            symbol: "ABC"
        }

        const serverResponse = {options: options};
        mockAxios.post.mockReturnValue(serverResponse);

        await postOptionsData(optionsData);

        const optionsUrl = "http://localhost:8081/ap/v1/options";
        expect(mockAxios.post).toHaveBeenCalledWith(optionsUrl, {"symbol": "ABC", "type": "PUT"});
    });

    it("postOptionsData - returns error from server if failure ", async () => {

        const optionsData = {
            type: 'PUT',
            symbol: "ABC"
        }

        const serverResponse = {error: "server error"};
        mockAxios.post.mockReturnValue(Promise.reject(new Error("server error")));

        const actual = await postOptionsData(optionsData);

        expect(actual).toEqual(serverResponse);
    });

    it("getStockDetails - calls endpoint with query parameter containing input",async () => {

        const liveQuote = {
            bid: 23.05,
            ask: 23.25,
            symbol: "AADR"
        };

        const stockMetadata = {"_id":{"$oid":"52853800bb1177ca391c1801"},"Performance (Quarter)":0.061,"Change":0.0064,"Country":"USA","Gap":0.0008,"Relative Volume":0.72,"ticker":"AADR","company":"WCM/BNY Mellon Focused Growth ADR ETF","twoHundredDaySimpleMovingAverage":0.0693,"fiftyDaySimpleMovingAverage":0.0158,"performanceYTD":0.1809,"relativeStrengthIndex14":51.91,"industry":"Exchange Traded Fund","performanceHalfYear":0.04,"averageTrueRange":0.31,"averageVolume":10.07,"performanceYear":0.229,"volatilityMonth":0.0052,"performanceWeek":-0.0134,"yearlyHigh":-0.0194,"volatilityWeek":0.0072,"price":36.4,"performanceMonth":0.0183,"sector":"Financial","changeFromOpen":0.0055,"yearlyLow":0.2727,"volume":6660,"dividendYield":0.005,"twentyDaySimpleMovingAvg":-0.0054,"fiftyDayLow":0.0792,"fiftyDayHigh":-0.0194}


        const expected = {
            liveQuote: liveQuote,
            stockMetadata: stockMetadata
        }

        mockAxios.get.mockReturnValue(expected);

        const detailsUrl = "http://localhost:8081/api/v1/stocks?symbol=AADR";

        const actual = await getStockDetails("AADR");

        expect(actual).toEqual(expected);
        expect(mockAxios.get).toHaveBeenCalledWith(detailsUrl)
    });

    it("getPosts - calls posts endpoint", async () => {

        const response = {
           posts: [{id: 1, title: "nice trade", author: "mm", content: "bought 200 shares at 10"}]
        }

        // mockAxios.get.mockImplementationOnce(() => Promise.resolve(JSON.stringify(response)));
        mockAxios.get.mockReturnValue(response);

        const postsURL = "http://localhost:8081/api/v1/posts";

        const actual = await getPosts();

        expect(actual).toEqual(response);
        expect(mockAxios.get).toHaveBeenCalledWith(postsURL);
    });
});

