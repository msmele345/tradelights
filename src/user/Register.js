import React, {useReducer, useState} from 'react'
import {useForm} from "react-hook-form";
import {postRegistrationData} from "../components/FetchDataService";
import {POSTS_PATH} from "../constants/ViewConstants";
import appReducer from "../reducers";
import {ServerError} from "../components/ServerError";

const Register = props => {

    const [errorMessage, setErrorMessage] = useState('');
    const {register, errors, handleSubmit} = useForm();

    const [state, dispatch] = useReducer(appReducer, {user: ''});

    const {user} = state

    const renderErrors = () => {
        if (errorMessage !== '')
            return (
                <div id={"errorContainer"}><ServerError errorMessage={errorMessage}/></div>
            )
    };

    const onSubmit = async (data) => {

        const { username, password, email } = data;

        const response = await postRegistrationData(username, password, email);

        if (response.error) {
            setErrorMessage(response.error || response.message)
        } else {
            // props.history.push(HOME_PATH)
            dispatch({type: 'REGISTER', username})
            props.history.push({ pathname: POSTS_PATH, userDetails: {username: data.username} });
        }
    }

    return (
        <div className={"register"}>
            {renderErrors()}
            <form onSubmit={handleSubmit(onSubmit)}>
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