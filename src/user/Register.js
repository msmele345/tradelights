import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { postRegistrationData } from "../components/FetchDataService";
import {
    TextField,
    Select,
    MenuItem,
    Switch,
    FormControlLabel,
    ThemeProvider,
    Radio,
    createMuiTheme,
    Slider
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ServerError} from "../components/ServerError";
import { renderErrors } from "../constants/Utils";

const Register = props => {

    const { register, errors, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    // const [userDetails, setUserDetails] = useState("");

    const onSubmit = async (data) => {
        console.log("DATA FROM FORM BEING SENT TO SERVER: " + data);
        const response = await postRegistrationData(data.username, data.password, data.email);

        if (response.error) {
            setErrorMessage(response.error || response.message)
        } else {
            props.history.push("/") //send
        }
    }

    //save user details on hook and set dispatch? or display info on ui header like name

    return (
        <div className={"container"} id={"registerForm"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {renderErrors(errorMessage)}
                <section>
                    <label htmlFor="register-username">Username:</label>
                    <input name="username" ref={register({required: true})}/>
                    {errors.username && "A username is required"}
                </section>
                <section>
                    <label htmlFor="register-password">Password:</label>
                    <input name="password" ref={register({required: true})}/>
                    {errors.password && "A password is required"}
                </section>
                <section>
                    <label htmlFor="register-email">Email:</label>
                    <input name="email" ref={register({required: true})}/>
                    {errors.email && "An email is required"}
                </section>
                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Register;


//wait for success?
//navigate to trades or another welcome page? Welcome page could have links or tabs to options and trades..
//use
/*<div>
    <Link to="/">Landing Page</Link>
    <Link to="/editproject">Edit Project</Link>
</div>*/
//put links on landing page above renderRoutes()
//check trades api call to sql and make sure it works


// <form onSubmit={e => {e.preventDefault(); dispatch={ type: 'REGISTER', username } }}>
//     <label htmlFor="register-username">Username:</label>
//     <input type="text" name="register-username" id="register-username"  value={username} onChange={handleUsername}/>
//     <label htmlFor="register-password">Password:</label>
//     <input type="password" name="register-password" id="register-password" value={password} onChange={handlePassword}/>
//     <br/>
//     <br/>
//     <input type="submit" value="Register" disabled={username.length === 0 || password.length === 0}/>
// </form>