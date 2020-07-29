import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'

function App() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('abc');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const result = await axios(
                `http://localhost:8080/api/v1/trades/${search}`,
            )
            setData(result.data);
            setIsLoading(false)
        }
        fetchData();

    }, [search]);

    return (
        <Fragment>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button type="button" onClick={() => setSearch(query)}>
                Search
            </button>

            {!isLoading ?
                <ul>
                    {data.map(trade => (
                        <li key={trade.id}>
                            <a>{trade.symbol} - ${trade.tradePrice}</a>
                        </li>
                    ))}
                </ul> : (  <Loader type="Puff" color="#00BFFF" height={300} width={100} timeout={3000} />)
            }
        </Fragment>
    );
}

export default App;
