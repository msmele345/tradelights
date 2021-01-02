import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {getStockDetails} from "./FetchDataService";
import {StockDetailResult} from "./StockDetailResult";
import Loader from "react-loader-spinner";

export const StockDetailView = () => {

    const {register, errors, handleSubmit} = useForm();

    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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


    return (
        <div className={"tradesForm"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label htmlFor="stock-detail-search">Symbol:</label>
                    <input name="symbol" ref={register({required: true})}/>
                    {errors.symbol && "A Symbol Is Required"}
                </section>
                <input type="submit" value="Get Stock Details"/>
            </form>
            {!isLoading
                ? <StockDetailResult data={data}/>
                : <Loader data-testid="loading" type="Puff" color="#00BFFF" height={300} width={100} timeout={3000}/>
            }
        </div>
    )
};


