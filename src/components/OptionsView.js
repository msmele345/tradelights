import React, {Fragment, useEffect, useState} from "react";
import axios from "../__mocks__/axios";
import {SearchResult} from "./SearchResult";
import Loader from "react-loader-spinner";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {useForm} from "react-hook-form";

export const OptionsView = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register, errors, handleSubmit } = useForm();

    //use effect to make call
    //have search and query for symbol or calls and puts

    const onSubmit = async (data) => {
        console.log("DATA FROM FORM BEING SENT TO SERVER: " + data); //triggers getAllOptions to start
        //create HOME PAGE with links and PostList!! Registration or login with re-direct here
        //depending on whats on the form like a symbol or type, setup axios calls to server for data
        //radio button to select calls or puts then use selection to build query string with type?=PUT
        //useEffect first for getting all options? maybe not
        //have a OptionsSearchResult component with a data prop and populate with data on it
        // const response = await postRegistrationData(data.username, data.password, data.email);
    }

    const theme = createMuiTheme({palette: {type: "dark"}});

    return (
        <ThemeProvider theme={theme}>
            {/*<div>{renderErrors()}</div>*/}
            <div className={"container"} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <label htmlFor="register-password">Symbol:</label>
                        <input name="symbol" ref={register({required: true})}/>
                        {errors.symbol && "An options symbol is required"}
                    </section>
                    <input type="submit" value="Get Options Chain"/>
                </form>
            </div>
        </ThemeProvider>
    )
}