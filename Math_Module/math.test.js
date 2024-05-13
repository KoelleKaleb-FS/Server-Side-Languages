const {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    maxNumber
} = require('./math');


describe("Using Math within a test", ()=>{
    test('adds 1 + 2 to equal 3', ()=> {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts 7 - 3 to equal 4', () => {
        expect(subtract(7, 3)).toBe(4);
    });

    test('multiplies 5 * 10 to equal 50', () => {
        expect(multiply(5,10)).toBe(50);
    })

    test('divides 50 / 5 to equal 10', () => {
        expect(divide(50,5)).toBe(10);
    });

    test('square root of 9 to equal 3', ()=> {
        expect(squareRoot(9)).toBe(3);
    });

    test('max number between 5 an 10 to equal 10', ()=>{
        expect(maxNumber(5,10)).toBe(10);
    });
});