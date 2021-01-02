import React from 'react';
import {render, screen} from '@testing-library/react';
import {StockProfile} from "../components/StockProfile";

describe("StockProfile", () => {

    it("renders stock demographic data",  () => {

        const stockMetadata = {"_id":{"$oid":"52853800bb1177ca391c1801"},"Performance (Quarter)":0.061,"Change":0.0064,"Country":"USA","Gap":0.0008,"Relative Volume":0.72,"ticker":"AADR","company":"WCM/BNY Mellon Focused Growth ADR ETF","twoHundredDaySimpleMovingAverage":0.0693,"fiftyDaySimpleMovingAverage":0.0158,"performanceYTD":0.1809,"relativeStrengthIndex14":51.91,"industry":"Exchange Traded Fund","performanceHalfYear":0.04,"averageTrueRange":0.31,"averageVolume":10.07,"performanceYear":0.229,"volatilityMonth":0.0052,"performanceWeek":-0.0134,"yearlyHigh":-0.0194,"volatilityWeek":0.0072,"price":36.4,"performanceMonth":0.0183,"sector":"Financial","changeFromOpen":0.0055,"yearlyLow":0.2727,"volume":6660,"dividendYield":0.005,"twentyDaySimpleMovingAvg":-0.0054,"fiftyDayLow":0.0792,"fiftyDayHigh":-0.0194};

        render(<StockProfile stockMetadata={stockMetadata}/>)

        expect(screen.getByText(/Volume/)).toBeTruthy();
        expect(screen.getByText(/Sector/));
        expect(screen.getByText(/Company/)).toBeTruthy();
        expect(screen.getByText(/Performance YTD/)).toBeTruthy();
        expect(screen.getByText(/200 Day Simple Moving Avg/)).toBeTruthy();
        expect(screen.getByText(/52 Week Low/)).toBeTruthy();
        expect(screen.getByText(/52 Week High/)).toBeTruthy();
        expect(screen.getByText(/Dividend Yield/)).toBeTruthy();

        // expect(screen.)
        // const orderButton = await container.findByTestId('order-submit-button');
    });
});