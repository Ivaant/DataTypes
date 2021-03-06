'use strict';

const welcome = person => {
    console.log(`Ave, ${person.name}!`);
};

const persons = [
{name: "Marcus Aurelius"},
{name: "Mao Taedun"},
{name: "Rene Decarte"},
];

for (const person of persons) {
    welcome(person);
}