import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import CreatePost from "../post/CreatePost";
import {getPosts, createPost} from "../components/ApiService"
import userEvent from '@testing-library/user-event';

jest.mock("../components/ApiService");
describe("CreatePost", () => {

    const mockDispatch = jest.fn();

    it("accepts user input", () => {

        const {container} = render(<CreatePost dispatch={mockDispatch} user={"Bob"} posts={[]}/>)

        const newTitle = container.querySelector("input[name='title']");

        const newPost = container.querySelector("input[name='post']");

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

    it("calls api service to create post after submit", async () => {

        const post = {data: {id: 1, title: "nice trade", author: "mm", content: "bought 200 shares at 10"}}

        const { container } = render(<CreatePost user={"mmel"} dispatch={mockDispatch} posts={[]}/>)

        createPost.mockReturnValue(post)

        const titleInput = container.querySelector("input[name='title']");
        const postContent = container.querySelector("input[name='post']");
        const submit = container.querySelector("input[type='submit']");

        let titleText = "Great trade on Apple";
        fireEvent.input(titleInput, {
            target: {value: titleText}
        });

        let postText = "Bought 200 shares at 205.00 before the close!";
        fireEvent.input(postContent, {
            target: {value: postText}
        });

        await act(async () => {
            fireEvent.submit(submit);
        });

        // userEvent.click(submit);

        const postData = {
            author: "mmel",
            title: titleText,
            content: postText
        }

        expect(createPost).toHaveBeenCalledWith( postData.author, postData.title, postData.content);

       const header = await screen.getByRole('heading');

       // Find bys wait for element to appear Same as:const orderButton = await waitForElement(() => container.getByTestId('order-submit-button'));
       const header2 = await screen.findByRole('heading');

        expect(header.textContent).toEqual("WHATS YOUR PLAY OF THE DAY, MMEL?");
        expect(header2.textContent).toEqual("WHATS YOUR PLAY OF THE DAY, MMEL?")
    });
});