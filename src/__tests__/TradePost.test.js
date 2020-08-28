import React from 'react';
import {render, cleanup, waitForElement, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import TradePost from "../post/TradePost";


it("handles title, content, and author and renders correctly", () => {

    const args = {
        title: "Killer Trade",
        content: "Bought 100 @ 45.00",
        author: "Fred"
    }

     render(
        <TradePost
            title={args.title}
            content={args.content}
            author={args.author}
        />)

    expect(screen.getByTestId('title')).toHaveTextContent("Killer Trade");
    expect(screen.getByRole("post-content")).toHaveTextContent("Bought 100 @ 45.00");

    expect(screen.getByTestId("author")).toHaveTextContent("Fred");
    expect(screen.getByText("Written by")).toBeInTheDocument();
});