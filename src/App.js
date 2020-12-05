import React, {useEffect, useReducer} from 'react';
import './App.css';
import appReducer from './reducers'
import LandingPage from "./components/LandingPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


function App() {

    const [state, dispatch] = useReducer(appReducer, {user: ''})
    const { user } = state

    useEffect(() => {
        if (user) {
            document.title = `${user} - TradeLights`
        } else {
            document.title = "TradeLights"
        }
    });

    const theme = createMuiTheme({palette: {type: "dark"}});

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2 className={"banner"}>WELCOME TO THE OLOUNGE</h2>
                <LandingPage/>
            </div>
        </ThemeProvider>
    );
}

export default App;
