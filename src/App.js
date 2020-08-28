import React, {Fragment, useEffect, useReducer, useState} from 'react';
import './App.css';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import {SearchResult} from "./components/SearchResult";
import CreatePost from "./post/CreatePost";
import PostList from "./post/TradePostList";
import UserBar from "./user/UserBar";
import {useAxios2} from "./components/FetchDataService";
import appReducer from './reducers'

const defaultPosts = [
    {title: "Killer Trade on SPY", content: "BUY 200 SPY @ $210.00", author: "Mitch Mele"},
    {title: "Killer Trade on MSFT", content: "BUY 10 MSFT @ $121.00", author: "Mitch Mele"},
    {title: "Killer Trade on AAPL", content: "BUY 50 AAPL @ $333.00", author: "Mitch Mele"}
];

const userR = {type: 'LOGIN', username: 'Mitch Mele', password: 'notsecure'};
const userRegister = {type: 'REGISTER', username: 'Mitch Mele', password: 'notsecure', passwordRepeat: 'notsecure'};

function App() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const [user, setUser] = useState('');
    // const [posts, setPosts] = useState(defaultPosts);

    const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
    const { user, posts } = state

    useEffect(() => {
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

    // useAxios2(query, setData, setIsLoading, search);


    return (
        <div style={{padding: 8}}>
            <UserBar user={user} dispatch={dispatch}/>
            <br/>
            {user && <CreatePost user={user} posts={posts} dispatch={dispatch}/>}
            <br/>
            <hr/>
            <PostList posts={posts}/>
            <Fragment>
                <input
                    placeholder={"Symbol i.e..ABC"}
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button type="button" onClick={() => setSearch(query)}>
                    Search
                </button>

                {!isLoading ?
                    <SearchResult data-testid="resolved" data={data}
                                  symbolForDisplay={query}/>
                    : (<Loader
                            data-testid="loading"
                            type="Puff"
                            color="#00BFFF"
                            height={300}
                            width={100}
                            timeout={3000}/>)
                }
            </Fragment>
        </div>
    );
}

export default App;
