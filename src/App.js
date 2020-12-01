import React, {Fragment, useEffect, useReducer, useState} from 'react';
import './App.css';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import {SearchResult} from "./components/SearchResult";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import appReducer from './reducers'
import {ServerError} from "./components/ServerError";
import {useAxios} from "./components/FetchDataService";
import LandingPage from "./components/LandingPage";


function App() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const [user, setUser] = useState('');
    // const [posts, setPosts] = useState(defaultPosts);

    const [state, dispatch] = useReducer(appReducer, {user: ''})
    const {user} = state

    return (
        <div style={{padding: 8}}>
            <LandingPage/>
        </div>
    );
}

export default App;
