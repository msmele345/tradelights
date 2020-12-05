import React, {useState} from "react";
import Loader from "react-loader-spinner";
import {useForm} from "react-hook-form";
import {getOptionsData} from "./FetchDataService";
import {renderErrors} from "../constants/Utils";
import {OptionsChain} from "./OptionChain";

export const OptionsView = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        console.log("TYPE: " + data.type); //triggers getAllOptions to start
        setIsLoading(true)
        const response = await getOptionsData('')

        if (!response.error) {
            setIsLoading(false)
            setData(response.data)
        } else {
            setIsLoading(false)
            setErrorMessage(response.error || response.message)
        }
        //use radio select to build url for options server. URi builder to include type param if present
        //depending on whats on the form like a symbol or type, setup axios calls to server for data
        //radio button to select calls or puts then use selection to build query string with type?=PUT
    }

    return (
        <div>
            {renderErrors(errorMessage)}
            <form onSubmit={handleSubmit(onSubmit)} className={"optionForm"}>
                <section>
                    <label htmlFor="options-search">Symbol:</label>
                    <input name="symbol" ref={register({required: true})}/>
                    {errors.symbol && "An options symbol is required"}
                </section>
                <section>
                    <label htmlFor="options-type">CALLS OR PUTS:</label>
                    <select name="type" ref={register}>
                        <option>ALL</option>
                        <option>CALL</option>
                        <option>PUT</option>
                    </select>
                </section>
                <input type="submit" value="Get Options Chain"/>
            </form>
            {!isLoading
                ? <OptionsChain data={data}/>
                : <Loader data-testid="loading" type="Puff" color="#00BFFF" height={300} width={100} timeout={3000}/>
            }
        </div>
    )
}