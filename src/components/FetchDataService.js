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

//run lumper and seeker to load trades into sql!
//setup new registration form that posts to o lounge
//create user with form and provide access through security
//show an option on the screen