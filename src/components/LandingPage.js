import React, {useReducer} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TradeView} from "./TradesView";
import {OptionsView} from "./OptionsView";
import Register from "../user/Register";
import Login from "../user/Login";
import {HomeView} from "./HomeView";
import Header from "./Header";
import appReducer from "../reducers";

export const NoMatch = ({location}) => <h3>No match for <code>{location.pathname}</code></h3>

class LandingPage extends React.Component {

    renderRoutes = () => {
        return <div className={"container"} >
            <Switch>
                <Route exact path={"/"} component={HomeView}/>
                <Route exact path={"/register"} component={Register}/>
                <Route exact path={"/login"} component={Login}/>
                <Route exact path={"/trades"} component={TradeView}/>
                <Route exact path={"/options"} component={OptionsView}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    }

    render() {
        return (
            <div >
                <Router>
                    <Header/>
                    {this.renderRoutes()}
                </Router>
            </div>


        )
    }
}

export default LandingPage;