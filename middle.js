const adder = (initial = 0) => ({
    value: initial,
    steps: [initial],
    add(value) {
        this.steps.push(value);
        this.value += value;
        return this;
    }
});


const Adder = class {
    constructor(initial = 0) {
        this.value = initial;
        this.steps = [initial];
        return this;
    }

    add(value) {
        this.value += value;
        this.steps.push(value);
        return this;
    }
};

//Usage
{
const { value, steps } = adder(5).add(8).add(-3);
console.log('Total sum is ' + value);
const [a, b, c] = steps;
console.log('Steps of operations ' + a, b, c);
}

{
    const { value, steps } = new Adder(5).add(8).add(-3);
    console.log('Value ' + value);
    console.log('Steps ' + steps);
    const obj = new Adder(3).add(5);
    console.log('Object obj.value ' + obj.value);
    console.log('Object obj.steps ' + obj.steps);
    console.log('Object obj.add ' + obj.add);
}
