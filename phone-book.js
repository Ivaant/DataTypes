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

// console.log(phoneBook);

const findPhoneByName = (name) => {
    for (const person of phoneBook) {
        if (person.name === name) {
            return person.phone;
        }
    }
};

// console.log(findPhoneByName('Marcus'));

const hashItem = (phoneItem) => ({
    [phoneItem.name]: phoneItem.phone,
});

console.log(hashItem(phoneBook[0]));