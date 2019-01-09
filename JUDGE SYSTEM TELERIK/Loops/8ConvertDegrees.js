'use strict';
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '0,15, 30'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

//Celsius to Fahrenheit formula
//T(°F) = T(°C) × 1.8 + 32

let howMany = +gets();

const FahrenheitFormula = (celsius * 1.8) + 32;
for (let i = 0; i < howMany; i++) {
    const celsius = +gets();
}


print(FahrenheitFormula + " °F");
