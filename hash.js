'use strict';

const welcome = person => {
    console.log(`Ave, ${person.name}!`);
}

const hash = {
marcus: {name: "Marcus Aurelius"},
mao: {name: "Mao Taedun"},
rene: {name: "Rene Decarte"},
};

for (const key in hash) {
    const name = hash[key];
    welcome(name);
}