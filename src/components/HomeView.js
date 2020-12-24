import React, {useReducer} from 'react';
import PostList from "../post/PostList";
import appReducer from "../reducers";
import CreatePost from "../post/CreatePost";

export const HomeView = props => {

    const [state, dispatch] = useReducer(appReducer, {posts: DEFAULT_POSTS})
    const {posts} = state

    const {username} = (props.location && props.location.userDetails) || {};

    return (
        <div className={".homeContainer"}>
            <CreatePost posts={posts} user={!username ? '' : username} dispatch={dispatch}/>
            <PostList posts={posts} />
        </div>
    );
}

const DEFAULT_POSTS = [
    {title: "Killer Trade on SPY", content: "BUY 200 SPY @ $210.00", author: "Mitch Mele"},
    {title: "Killer Trade on MSFT", content: "BUY 10 MSFT @ $121.00", author: "Mitch Mele"},
    {title: "Killer Trade on AAPL", content: "BUY 50 AAPL @ $333.00", author: "Mitch Mele"}
];

//home view has post lists and nav bar