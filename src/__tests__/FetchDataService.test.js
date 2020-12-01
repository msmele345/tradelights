import React from "react";
import mockAxios from "axios"
import {postRegistrationData, useAxios} from "../components/FetchDataService";

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
});

