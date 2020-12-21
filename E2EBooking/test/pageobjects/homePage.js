const wdioAction = require('Utils').wdioAction;

class HomePage {
    constructor(){
        this.inputHomeValue = "#homeValue";
        this.inputMorgageBalance = "#mortgageBalance";
        this.inputOtherLiens = "#liens";
        this.buttonSubmit = "button=Calculate";
        this.labelResultValue = "span[class='styles__ResultsValue-sc-9ejkdd-12 imDQfu']";
        
    };

    setHomeValue(value){
        wdioAction.setValue(this.inputHomeValue, value);
    }

    setMorgageBalance(value){
        wdioAction.setValue(this.inputMorgageBalance, value);
    }

    setDeparture(value){
        wdioAction.setValue(this.inputOtherLiens, value);
    }

    clickSubmit(){
        wdioAction.waitForClickable(this.buttonSubmit);
        wdioAction.click(this.buttonSubmit);
    }

    getResultValue(){
        wdioAction.waitForDisplayed(this.labelResultValue);
        return wdioAction.getValue(this.labelResultValue);
    }

    open() {
        browser.url("/programs/sellstay");
    };
}

module.exports = new HomePage();