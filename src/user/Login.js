import React, {useState} from "react";

export default function Login({dispatch}) {

    //
    // const { register, errors, handleSubmit } = useForm();
    // const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    };

    return (
        <div>
            <form className={"loginForm"} onSubmit={e => {
                e.preventDefault();
                dispatch({type: 'LOGIN', username})
            }}>
                <section>
                    <label htmlFor="login-username">Username:</label>
                    <input type="text" name="login-username" id="login-username" value={username}
                           onChange={handleUsername}/>
                </section>
                <section>
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" name="login-password" id="login-password"/>
                </section>
                <input type="submit" value="Login" disabled={username.length === 0}/>
            </form>
        </div>
    )
}
