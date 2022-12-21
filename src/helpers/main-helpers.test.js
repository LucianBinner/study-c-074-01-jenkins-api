const { generateRadomNumber } = require("./main-helpers")

describe('Main Helpers', () => {
    test('Should receive a random number', () => {
        const randoomNumber = generateRadomNumber()
        console.log(typeof randoomNumber);
        expect(typeof randoomNumber).toBe("number")
    })
})
