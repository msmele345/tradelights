import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import CreatePost from "../post/CreatePost";

describe("CreatePost", () => {

    const mockDispatch = jest.fn();

    it("renders userName if one is provided", () => {

        const {container} = render(<CreatePost dispatch={mockDispatch} user={"Bob"} posts={[]}/>)

        const newTitle = container.querySelector("input[name='title']");

        const newPost = container.querySelector("input[name='post']");

        const submitButton = container.querySelector("input[type='submit']");

        fireEvent.input(newTitle, {
            target: {value: "Bad Beat on AAPL"}
        });

        fireEvent.input(newPost, {
            target: {value: "Bought AAPL at 200.00"}
        });

        expect(screen.getByText("Post:")).toBeTruthy();
        expect(screen.getByText("Title:")).toBeTruthy();

        expect(container.querySelector("input[name='title']").value).toEqual("Bad Beat on AAPL");
        expect(container.querySelector("input[name='post']").value).toEqual("Bought AAPL at 200.00");
    });

    it("renders a error if no input is received", async () => {

        const {container} = render(<CreatePost dispatch={mockDispatch} user={"Bob"} posts={[]}/>)

        const submitButton = container.querySelector("input[type='submit']");

        //just use submit, no options needed. Act needed for submit but not for input
        await act( async () => {
            fireEvent.submit(submitButton);
        });

        expect(screen.getByText("A Post Title Is Required")).toBeTruthy();
        expect(screen.getByText("Content is required")).toBeTruthy();
    });
});