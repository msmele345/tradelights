import React, {useEffect} from "react";
import axios from 'axios';

export const useAxios = async (query) => {
    const queryUrl = `http://localhost:8080/api/v1/trades/${query}`
     return await axios.get(queryUrl)
}

export const useAxios2 = async (query, setData, setIsLoading, search) => {
    useEffect(
        () => {
            const fetchData = async () => {
                setIsLoading(true)
                const result = await axios.get(
                    `http://localhost:8080/api/v1/trades/${search}`,
                )
                setData(result.data);
                setIsLoading(false)
            }
            fetchData();

        }, [search]);
}