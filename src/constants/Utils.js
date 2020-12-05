import {ServerError} from "../components/ServerError";
import React from "react";

export const renderErrors = ( {errorMessage} ) => {if (errorMessage !== '') return (<div><ServerError errorMessage={errorMessage}/></div>)};
