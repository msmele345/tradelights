import React from 'react';
import {render, cleanup, waitForElement, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import TradePost from "../post/TradePost";
import TradePostList from "../post/TradePostList";


it("renders a list of posts", () => {

    const tradePosts = [
        {
            title: "Killer Trade",
            content: "Bought 100 AAPL @ 45.00",
            author: "Fred"
        },
        {
            title: "Bad Trade",
            content: "Bought 50 MSFT @ 55.00",
            author: "Bob"
        },
        {
            title: "Horrible Trade",
            content: "Bought 25 GOOG @ 145.00",
            author: "Mitch"
        }
    ];

    render(<TradePostList posts={tradePosts}/>)

    expect(screen.getByText("Killer Trade")).toBeInTheDocument();
    expect(screen.getByText("Bad Trade")).toBeInTheDocument();
    expect(screen.getByText("Horrible Trade")).toBeInTheDocument();

    expect(screen.getAllByRole("post-content")[1]).toHaveTextContent("Bought 50 MSFT @ 55.00");
});