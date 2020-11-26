import React, {useState} from 'react'

export default function Register ({ dispatch }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value)
    };
    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    return (
        <form onSubmit={e => {e.preventDefault(); dispatch={ type: 'REGISTER', username } }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" id="register-username"  value={username} onChange={handleUsername}/>
            <label htmlFor="register-password">Password:</label>
            <input type="password" name="register-password" id="register-password" value={password} onChange={handlePassword}/>
            <br/>
            <br/>
            <input type="submit" value="Register" disabled={username.length === 0 || password.length === 0}/>
        </form>
    )
}