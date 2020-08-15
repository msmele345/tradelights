import React from "react";


export default function TradePost ({ title, content, author }) {
    return (
        <div>
            <h3>{title}</h3>
            <div role={"post-content"}>{content}</div>
            <br />
            <i>Written by <b>{author}</b></i>
        </div>
    )
}

