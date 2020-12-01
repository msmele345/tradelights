import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "../user/Register";
import {fireEvent} from "@testing-library/dom";


describe('Register ',  () => {

    it('should render the form fields correctly', () => {

        render(<Register />)

        expect(screen.getAllByRole("textbox")[0].getAttribute("name")).toEqual("username");
        expect(screen.getAllByRole("textbox")[1].getAttribute("name")).toEqual("password");
        expect(screen.getAllByRole("textbox")[2].getAttribute("name")).toEqual("email");
    });


    it('should validate all fields have content', async () => {

        render(<Register />)

        fireEvent.input(screen.getAllByRole("textbox")[0], { target: { value: "" }});
        fireEvent.input(screen.getAllByRole("textbox")[1], { target: { value: "" }});
        fireEvent.input(screen.getAllByRole("textbox")[2], { target: { value: "" }});

        fireEvent.submit(screen.getByTestId("submit"));

        // expect(await screen.findAllByRole("alert").size).toEqual(3)
        //https://levelup.gitconnected.com/testing-react-hook-form-with-react-testing-library-16141ea17c8f
    });
});