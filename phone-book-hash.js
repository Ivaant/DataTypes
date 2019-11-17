'use strict';

const person = (name, phone) => ({
    name: name,
    phone: phone,
});

// console.log(person('Marcus', '+380504560033'));


const phoneBook = [
    person('Marcus','+380504727722'),
];

// console.log(phoneBook);

phoneBook.push(person('Iva', '+380405567788'));
phoneBook.push(person('Ant', '+380955507750'));

const phoneBookHash = {};

for (let item of phoneBook) {
    const { name, phone } = item;
    phoneBookHash[name] = phone;
}

// console.log(phoneBook);
console.log(phoneBookHash);
