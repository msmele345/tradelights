import React from 'react'

import TradePost from './TradePost'

export default function PostList ({ posts = [] }) {
    return (
        <div>
            {posts.map((p, i) => (
                <React.Fragment key={'post-' + i}>
                    <TradePost {...p} />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    )
}
