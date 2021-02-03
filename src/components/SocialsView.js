import React, {useEffect, useReducer, useState} from 'react';
import PostList from "../post/PostList";
import appReducer from "../reducers";
import CreatePost from "../post/CreatePost";
import {getPosts} from "./ApiService";

export const SocialsView = props => {

    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const {username} = (props.location && props.location.userDetails) || {};

    const {router} = props;

    useEffect( () => {
        const fetchPosts = async () => {
           const response = await getPosts()
            if(response.error) {
                setErrorMessage(response.message || response.error)
            }
            setPosts(response.data)
        }
        fetchPosts()
    }, [])

    return (
        <div className={"socialContent"}>
            <CreatePost user={!username ? '' : username}/>
            <PostList posts={posts}/>
        </div>
    );
};