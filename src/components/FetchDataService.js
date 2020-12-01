import React, {useEffect} from "react";
import axios from 'axios';

export const getTradeData = async (query) => {
    const queryUrl = `http://localhost:8080/api/v1/trades/${query}`

    let response;
    try {
        response = await axios.get(queryUrl)
    } catch (e) {
        response = {error: e.error || e.message}
    }
    return response;
}


export const postRegistrationData = async (username, password, email) => {
    const queryUrl = `http://localhost:8081/api/v1/users`;

    const requestBody = {
        username: username,
        password: password,
        email: email
    }

    let response;
    try {
        response = await axios.post(queryUrl, requestBody)
    } catch (e) {
        console.log({e})
        response = {error: e.error || e.message}
    }
    return response;
}

export const useAxios = async (setData, setIsLoading, search, setErrorMessage) => {
    useEffect(
        () => {
            const fetchData = async () => {
                setIsLoading(true)
                axios.get(
                    `http://localhost:8085/api/v1/trades/${search}`,
                    )
                    .then(response => setData(response.data))
                    .catch(e => {
                        console.log(" ERROR " + e.message)
                        setErrorMessage(e.message)
                    })
                setIsLoading(false)
            }
            fetchData();
        }, [search]);
}
//show an option on the screen