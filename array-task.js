'use strict';

const arr = (start, end) => {
    let res = [];
    const length = end - start + 1;
    for (let i = 0; i < length; i++) {
        res.push(start++);
    }
    return res;
}

const oddArr = (start, end) => {
    let res = [];
    let current = start;
    const length = end - start + 1;
    for (let i = 0; i < length; i++) {
        if (current > end) {
            break;
        }
        if (current%2) {
            res.push(current++);
        }
        current++;
    }
    return res;
}

console.log(arr(15, 30));
console.log(oddArr(15, 30));