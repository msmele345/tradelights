import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {

    active = {
        fontWeight: "bold",
        color: "white"
    };

    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none",
        color: "white"

    };

    render() {
        return (
            <div style={this.header} className={"header"}>

                <NavLink exact to="/" activeStyle={this.active}>
                    Home
                </NavLink>
                <NavLink exact to="/trades" activeStyle={this.active}>
                    Trades
                </NavLink>
                <NavLink exact to="/stocks" activeStyle={this.active}>
                    Stocks
                </NavLink>
                <NavLink to="/options" activeStyle={this.active}>
                    Options
                </NavLink>
                <NavLink to="/register" activeStyle={this.active}>
                    Register
                </NavLink>
                <NavLink to="/login" activeStyle={this.active}>
                    Login
                </NavLink>
            </div>
        );
    }
}

export default Header;