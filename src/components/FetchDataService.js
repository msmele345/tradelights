import React from "react";
import axios from 'axios';

export const useAxios = async (query) => {
    const queryUrl = `http://localhost:8080/api/v1/trades/${query}`
     return await axios.get(queryUrl)
}