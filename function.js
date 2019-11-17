'use strict';

const average = (a, b) => (a + b)/2;

const square = (a) => a*a;

const cube = (a) => a**3;

const calc = () => {
    let res = [];
    for (let i = 0; i < 10; i++) {
        res.push(average(square(i), cube(i)));
    }
    return res;
}

console.log(average(1, 10));
console.log(square(10));
console.log(cube(10));
console.log(calc());