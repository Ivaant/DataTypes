'use strict';

const welcome = person => {
    console.log(`Ave, ${person.name}!`);
}

const marcus = {name: "Marcus Aurelius"};
const mao = {name: "Mao Taedun"};
const decarte = {name: "Rene Decarte"};

welcome(marcus);
welcome(mao);
welcome(decarte);