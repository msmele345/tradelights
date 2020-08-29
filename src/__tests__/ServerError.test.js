import React from 'react';
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import {ServerError} from "../components/ServerError";


it("renders the error message passed correctly", () => {
    const serverErrorMessage = "server error";

    render(<ServerError  errorMessage={serverErrorMessage}/>)

    expect(screen.getByTestId("errors")).toHaveTextContent("server error");
});