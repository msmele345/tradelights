import React, {Fragment, useEffect, useReducer, useState} from "react";
import appReducer from "../reducers";
import UserBar from "../user/UserBar";
import CreatePost from "../post/CreatePost";
import PostList from "../post/PostList";
import {SearchResult} from "./SearchResult";
import Loader from "react-loader-spinner";
import {ServerError} from "./ServerError";
import {useAxios} from "./FetchDataService";

const SERVER_URL = `http://localhost:8085/api/v1/trades/`

export const TradeView = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [state, dispatch] = useReducer(appReducer, {user: '', posts: defaultPosts})
    const {user, posts} = state

    const renderErrors = () => {if (errorMessage !== '') return (<div><ServerError errorMessage={errorMessage}/></div>)};

    useEffect(() => {
        if (user) {
            document.title = `${user} - TradeLights Blog`
        } else {
            document.title = "TradeLights Blog"
        }
    });

    useAxios(setData, setIsLoading, search, setErrorMessage, SERVER_URL);

    return (
        <div>
            {/*<UserBar user={user} dispatch={dispatch}/>*/}
            <br/>
            <br/>
            {user && <CreatePost user={user} posts={posts} dispatch={dispatch}/>}
            <br/>
            <hr/>
            {renderErrors()}
            <PostList posts={posts}/>
            <Fragment>
                <div className="form-group">
                    <input placeholder={"Symbol i.e..ABC"} type="text" value={query}
                           onChange={event => setQuery(event.target.value)}/>
                </div>
                <button type="button" onClick={() => setSearch(query)}>Search</button>
                {!isLoading
                    ? <SearchResult data-testid="resolved" data={data} symbolForDisplay={query}/>
                    : (<Loader data-testid="loading" type="Puff" color="#00BFFF" height={300} width={100}
                               timeout={3000}/>)
                }
            </Fragment>
        </div>
    )
}


const defaultPosts = [
    {title: "Killer Trade on SPY", content: "BUY 200 SPY @ $210.00", author: "Mitch Mele"},
    {title: "Killer Trade on MSFT", content: "BUY 10 MSFT @ $121.00", author: "Mitch Mele"},
    {title: "Killer Trade on AAPL", content: "BUY 50 AAPL @ $333.00", author: "Mitch Mele"}
];
