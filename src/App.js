import React from 'react';
import './App.css';
import {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import {SearchResult} from "./components/SearchResult";
import CreatePost from "./post/CreatePost";
import PostList from "./post/TradePostList";
import UserBar from "./user/UserBar";

const defaultPosts = [
    {title: "Killer Trade on SPY", content: "BUY 200 SPY @ $210.00", author: "Mitch Mele"},
    {title: "Killer Trade on MSFT", content: "BUY 10 MSFT @ $121.00", author: "Mitch Mele"},
    {title: "Killer Trade on AAPL", content: "BUY 50 AAPL @ $333.00", author: "Mitch Mele"}
];

function App() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState(defaultPosts);


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


    return (
        <div style={{padding: 8}}>
            <UserBar user={user} setUser={setUser}/>
            <br/>
            {user && <CreatePost user={user} posts={posts} setPosts={setPosts}/>}
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
