import React from 'react'

export const getTrades = async () => {
    const response = await fetch("http://localhost:8080/api/v1/trades", {
        method: 'GET'
    });
    if (response.status === 200) {
        return (await response.json())
    }
}