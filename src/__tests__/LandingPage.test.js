import React from "react";
import {shallow} from 'enzyme'
import LandingPage, {NoMatch} from "../components/LandingPage";
import {Switch} from 'react-router-dom';
import Register from "../user/Register";
import Login from "../user/Login";
import {TradeView} from "../components/TradesView";
import {OptionsView} from "../components/OptionsView";
import {HomeView} from "../components/HomeView";

describe('LandingPage ', () => {

    it('should render the routes correctly', () => {
        let wrapper;

        wrapper = shallow(<LandingPage/>);

        const div = shallow(<div>{wrapper.instance().renderRoutes()}</div>);

        expect(div.find(".container").length).toEqual(1);
        expect(div.find(Switch).length).toEqual(1);
        expect(div.find(Switch).children().length).toEqual(6);


        expect(div.find(Switch).childAt(0).props().path).toEqual("/");
        expect(div.find(Switch).childAt(0).props().component).toEqual(Register);

        expect(div.find(Switch).childAt(1).props().path).toEqual("/home");
        expect(div.find(Switch).childAt(1).props().component).toEqual(HomeView);

        expect(div.find(Switch).childAt(2).props().path).toEqual("/login");
        expect(div.find(Switch).childAt(2).props().component).toEqual(Login);

        expect(div.find(Switch).childAt(3).props().path).toEqual("/trades");
        expect(div.find(Switch).childAt(3).props().component).toEqual(TradeView);


        expect(div.find(Switch).childAt(4).props().path).toEqual("/options");
        expect(div.find(Switch).childAt(4).props().component).toEqual(OptionsView);

        expect(div.find(Switch).childAt(5).props().component).toEqual(NoMatch);
    });
});