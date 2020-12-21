const HomePage = require("../pageobjects/homePage");

describe('Calculator', () => {

    it('Estimates how much value people can get from their home', () => {
        const homeValue = 300000;
        const morgageBalance = 10000;
        const otherLiens = 5000;
        let n = new Number((homeValue * 0.665 ) - morgageBalance - otherLiens);
        let expectedResult = n.toLocaleString("en-GB", {style: "decimal"})
        HomePage.open();
        HomePage.setHomeValue(homeValue);
        HomePage.setMorgageBalance(morgageBalance);
        HomePage.setDeparture(otherLiens);
        HomePage.clickSubmit();
        expect($(HomePage.labelResultValue)).toHaveText(`$${expectedResult}`);
    });
});