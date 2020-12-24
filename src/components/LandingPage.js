import React, {useReducer} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TradeView} from "./TradesView";
import {OptionsView} from "./OptionsView";
import Register from "../user/Register";
import Login from "../user/Login";
import {HomeView} from "./HomeView";
import Header from "./Header";
import {HOME_PATH, LOGIN_PATH, OPTIONS_PATH, REGISTER_PATH, STOCKS_PATH} from "../constants/ViewConstants";

export const NoMatch = ({location}) => <h3>No match for <code>{location.pathname}</code></h3>

class LandingPage extends React.Component {

    renderRoutes = () => {
        return <div className={"container"} >
            <Switch>
                <Route exact path={HOME_PATH} component={HomeView}/>
                <Route exact path={REGISTER_PATH} component={Register}/>
                <Route exact path={LOGIN_PATH} component={Login}/>
                <Route exact path={STOCKS_PATH} component={TradeView}/>
                <Route exact path={OPTIONS_PATH} component={OptionsView}/>
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