import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {getStockDetails} from "./ApiService";
import Loader from "react-loader-spinner";
import {LiveQuote} from "./LiveQuote";
import {StockProfile} from "./StockProfile";

export const StockDetailView = () => {

    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {stockMetadata, liveQuote} = data;
    const {register, errors, handleSubmit} = useForm();

    //component for level 2 quotes (call services to get all bids and offers)
    //component for technical indicator fields
    //place all components in block side by side for final view
    const onSubmit = async (data) => {

        const response = await getStockDetails(data.symbol);

        setIsLoading(true);
        if (!response.error) {
            console.log("DETAILS RESPONSE: ", response.data);
            setIsLoading(false);
            setData(response.data)
        } else {
            setIsLoading(false);
            setErrorMessage(response.error || response.message)
        }
    }

    const renderLoader = () => (<Loader data-testid="loading" type="Puff" color="#00BFFF" height={300} width={100} timeout={3000}/>)

    const renderData = () => {
        if (!stockMetadata || !liveQuote) return; //do we care if liveQuote is not there?
        return (
            <div>
                <LiveQuote quoteData={liveQuote}/>
                <StockProfile stockMetadata={stockMetadata}/>
            </div>
        )
    };

    return (
        <div className={"stocksForm"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label htmlFor="stock-detail-search">Symbol:</label>
                    <input name="symbol" ref={register({required: true})}/>
                    {errors.symbol && "A Symbol Is Required"}
                </section>
                <input type="submit" value="Get Stock Details"/>
            </form>
            { !isLoading ? renderData() : renderLoader() }
        </div>
    )
};


