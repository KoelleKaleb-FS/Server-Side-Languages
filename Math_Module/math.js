/*This assignment use 
Add, Subtract, Multiply, Divide 
then use square root and max number */

const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

const squareRoot = (num) => Math.sqrt(num);

const maxNumber = (a,b) => Math.max(a,b);

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    maxNumber
};