'use strict';
const MAX_VALUE = 10;
let counter = 0;
const INTERVAL  = 500;
let timer = null;

const event = () => {
    if (counter === MAX_VALUE) {
        console.log("The end");
        clearInterval(timer);
        return;
    }
    console.dir({ counter, date: new Date() });
    counter++;
}

console.log("Begin");
timer = setInterval(event, INTERVAL);