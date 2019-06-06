module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/Automation-Basics/build/')
            .waitForElementPresent('[class="puzzleBox evenAndOddPB"]', 5000)

    },
    after: browser => {
        browser.end()
    },

    'Odds and Evens': browser => {
        browser
            .click('[name="evenOddInput"]')
            .setValue('[name="evenOddInput"]', ['1', browser.Keys.ENTER])
            .click('[name="evenOddButton"]')
            .waitForElementVisible('[name="evenResults"]', 5000)
            .pause(3000)
    },

    'Fitler Objects': browser => {
        browser
            .click('[name="objectFilterInput"]')
            .setValue('[name="objectFilterInput"]', ['Jimmy Joe', 'Carly Armstrong', browser.Keys.ENTER])
            .click('[name="objectFilterButton"]')
            .waitForElementVisible('[name="objectFilterResults"]', 5000)
            .pause(3000)
    },

    'Fitler String': browser => {
        browser
            .click('[name="objectFilterInput"]')
            .setValue('[name="objectFilterInput"]', ['Tyler', 'Jessica', 'Matt', browser.Keys.ENTER])
            .click('[id="nameFilterButton"]')
            .waitForElementVisible('[name="objectFilterResults"]', 5000)
            .pause(3000)
    },

    'Palindrome': browser => {
        browser
            .click('[name="palindromeInput"]')
            .setValue('[name="palindromeInput"]', ['Madam', browser.Keys.ENTER])
            .click('[name="palindromeButton"]')
            .waitForElementVisible('[name="objectFilterResults"]', 5000)
            // SHould read true //
            .pause(3000)
    },

    'Palindrome': browser => {
        browser
            .click('[name="palindromeInput"]')
            .setValue('[name="palindromeInput"]', ['Madam', browser.Keys.ENTER])
            .click('[name="palindromeButton"]')
            .waitForElementVisible('[name="objectFilterResults"]', 5000)
            // Should read true //
            .pause(3000)
    },

    'Sum': browser => {
        browser
            .click('[name="sumInput1"]')
            .setValue('[name="sumInput1"]', ['123456789', browser.Keys.ENTER])
            .click('[name="sumInput2"]')
            .setValue('[name="sumInput2"]', ['987654321', browser.Keys.ENTER])
            .click('[name="sumButton"]')
            .waitForElementVisible('[name="objectFilterResults"]', 5000)
            // Should should sum of 2 numbers. //
            .pause(3000)

    }
}

