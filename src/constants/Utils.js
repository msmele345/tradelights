import {ServerError} from "../components/ServerError";
import React from "react";

export const renderErrors = ( {errorMessage} ) => {if (errorMessage !== '') return (<div id={"errorContainer"}><ServerError errorMessage={errorMessage}/></div>)};
