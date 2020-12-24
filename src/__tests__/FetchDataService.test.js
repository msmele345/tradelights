import React from "react";
import mockAxios from "axios"
import {getOptionsData, postOptionsData, postRegistrationData, useAxios} from "../components/FetchDataService";

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


        const optionsUrlWithNoParams = "http://localhost:8081/options";


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

        const optionsUrl = "http://localhost:8081/options";

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

        const optionsUrl = "http://localhost:8081/options";
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
});

