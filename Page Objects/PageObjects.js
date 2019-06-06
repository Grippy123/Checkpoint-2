module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
            React: { 
                selector: '[name="evenOddInput"]',
                locateStrategy: 'CSS'
            },
            OddEven: { 
                selector: '[name="evenOddInput"]',
                locateStrategy: 'CSS'
            },
            FilterObject: { 
                selector: '[name="objectFilterInput"]',
                locateStrategy: 'CSS'
            },
            FilterString: { 
                selector: '[name="objectFilterInput"]',
                locateStrategy: 'CSS'
            },
            Palindrome: { 
                selector: '[name="palindromeInput"]',
                locateStrategy: 'CSS'
        },
        Sum: { 
            selector: '[name="sumInput1"]',
            locateStrategy: 'CSS'
        },
        Sum: { 
            selector: '[name="sumInput2"]',
            locateStrategy: 'CSS'























var  Checkpoint2commands= {
    clickBox: function (Check, Filter, Add) {
        this.api.useXpath()
        this.click(`//li[text()="${Check, Filter, Add}"]`)
        this.api.useCss()
        return this
    },
}
