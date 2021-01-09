import React from 'react'

import TradePost from './TradePost'

export default function PostList ({ posts = []}) {


    //server work for posts
    //add react hook form
    //make api call to get all posts
    //tests for all forms

    return (
        <div className={"postList"}>
            {posts.map((p, i) => (
                <React.Fragment key={'post-' + i}>
                    <TradePost {...p} />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    )
}
