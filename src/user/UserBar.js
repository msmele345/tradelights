import React, {useReducer, useState} from 'react'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import appReducer from "../reducers";

export default function UserBar () {

    const [state, dispatch] = useReducer(appReducer, {user: '', posts: []})
    const {user} = state

    if (user) {
        return <Logout user={user} dispatch={dispatch} />
    } else {
        return (
            <React.Fragment>
                <Login dispatch={dispatch} />
                <br/>
                <Register dispatch={dispatch}/>
            </React.Fragment>
        )
    }
}