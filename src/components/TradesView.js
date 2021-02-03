import React, {useReducer, useState} from "react";
import appReducer from "../reducers";
import {TradesSearchResult} from "./TradesSearchResult";
import Loader from "react-loader-spinner";
import {useAxios} from "./ApiService";
import {TRADES_URL} from "../constants/UrlConstants"
import {ServerError} from "./ServerError";

export const TradeView = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const [state, dispatch] = useReducer(appReducer, {user: ''})

    const {user, posts} = state

    useAxios(setData, setIsLoading, search, setErrorMessage, TRADES_URL);

    const renderErrors = () => {
        if (errorMessage !== '')
            return (
                <div id={"errorContainer"}><ServerError errorMessage={errorMessage}/></div>
            )
    };

    return (
        <div className={"tradeView"}>
            {/*<UserBar user={user} dispatch={dispatch}/>*/}
            {renderErrors()}
            <form>
                <section className={"tradesForm"}>
                    <input placeholder={"Symbol i.e..ABC"} type="text" value={query}
                           onChange={event => setQuery(event.target.value)} className={"tradeSymbol"}/>
                    <button type="button" onClick={() => setSearch(query)} className={"tradeButton"}>Search</button>
                </section>
                {!isLoading
                    ? <TradesSearchResult data-testid="resolved" data={data} symbolForDisplay={query}/>
                    : (<Loader data-testid="loading" type="Puff" color="#00BFFF" height={300} width={100}
                               timeout={3000}/>)
                }
            </form>
        </div>
    )
};

//		865557683