import React from "react";
import * as ViewConstants from "../constants/ViewConstants"
import {withRouter} from "react-router-dom";

class NavBar extends React.Component {

    constructor() {
        super();
        this.state = {
            tabs: this.initState()
        };
    }

    initState = () => {
        const tabs = [
            {
                label: ViewConstants.TRADES,
                path: ViewConstants.TRADES_PATH,
                disabled: false
            },
            {
                label: ViewConstants.OPTIONS,
                path: ViewConstants.OPTIONS_PATH,
                disabled: false
            },
            {
                label: ViewConstants.LOGIN,
                path: ViewConstants.LOGIN_PATH,
                disabled: false
            }
        ];
        // if(loginIsEnabled()) {
        //     return tabs
        // }
        return [...tabs];
    }

    getActiveTab = () => ViewConstants.PATH_TO_VIEW[this.props.location.pathname];

    handleTabChange = tab => this.props.history.push(tab.path)

    render() {
        return (
            <div>
                Hi
            </div>
        )
    }
}

export default withRouter(NavBar);