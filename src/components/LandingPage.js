import React, {useReducer} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TradeView} from "./TradesView";
import {OptionsView} from "./OptionsView";
import Register from "../user/Register";
import Login from "../user/Login";
import {HomeView} from "./HomeView";
import Header from "./Header";
import {HOME_PATH, LOGIN_PATH, OPTIONS_PATH, REGISTER_PATH, STOCKS_PATH, TRADES_PATH} from "../constants/ViewConstants";
import {StockDetailView} from "./StockDetailView";

export const NoMatch = ({location}) => <h3>No match for <code>{location.pathname}</code></h3>

class LandingPage extends React.Component {

    renderRoutes = () => {
        return <div className={"container"} >
            <Switch>
                <Route exact path={HOME_PATH} component={HomeView}/>
                <Route exact path={REGISTER_PATH} component={Register}/>
                <Route exact path={LOGIN_PATH} component={Login}/>
                <Route exact path={TRADES_PATH} component={TradeView}/>
                <Route exact path={OPTIONS_PATH} component={OptionsView}/>
                <Route exact path={STOCKS_PATH} component={StockDetailView}/>
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

//stockDetail view - can call to get current lowest bid and highest ask
//stockDetail view also makes call to new endpoint to get stock metadata for details
//arrange bids and asks by symbol
//setup backend to send one object of bid and ask