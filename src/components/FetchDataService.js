import React, {useEffect} from "react";
import axios from 'axios';

export const useAxios = async (query) => {
    const queryUrl = `http://localhost:8080/api/v1/trades/${query}`

    let response;
    try {
        response = await axios.get(queryUrl)
    } catch (e) {
        response = {error: e.error || e.message}
    }
    return response;
}

export const useAxios2 = async (setData, setIsLoading, search, setErrorMessage) => {
    useEffect(
        () => {
            const fetchData = async () => {
                setIsLoading(true)
                axios.get(
                    `http://localhost:8080/api/v1/trades/${search}`,
                    )
                    .then(response => setData(response.data))
                    .catch(e => {
                        console.log(e.message)
                        setErrorMessage(e.message)
                    })
                setIsLoading(false)
            }
            fetchData();
        }, [search]);
}