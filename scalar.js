'use strict';

let scalar1 = 5;
let scalar2 = scalar1;
scalar1--;
scalar2++;

console.dir({ scalar1, scalar2 });

const object1 = {value: 10};
const object2 = object1;
object1.value = 15;
console.dir(object2);