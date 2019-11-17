'use strict';

const fn = (name) => {
    const object1 = { name: name };
    let object2 = { name: name };
    object1.name = 'Ant';
    object2.name = 'Zero';
    // object1 = object2;
    object2 = {nick: name};
    return { obj1: object1, obj2: object2 };
};

console.dir(fn('Iva'));

// const createUser = (name, city) => ({
//     name: name,
//     city: city
// });

// console.dir(createUser('Antonio', 'Torino'));


// module.exports = { fn };

