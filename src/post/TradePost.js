import React from "react";


export default function TradePost ({ title, content, author }) {
    return (
        <div>
            <h3 data-testid={"title"}>{title}</h3>
            <div role={"post-content"}>{content}</div>
            <br />
            <i>Written by <b data-testid={"author"}>{author}</b></i>
        </div>
    )
}

