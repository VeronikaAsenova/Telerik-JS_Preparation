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
    'd',
    '5'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let files = gets();
let ranks = +gets();

function solve(parameter) {

    let dogYear = gets();
    let humanYear = gets();

    if (humanYear <= 2 && humanYear > 0) {
        for (let i = 0; i < humanYear; i++) {
            dogYear = dogYear + 10;
        }
    }
    if (humanYear > 2) {
        for (let i = 0; i < humanYear - 2; i++) {
            dogYear = dogYear + 4;
        }
        dogYear = 20 + dogYear;
    }

    if (humanYear == 0) {
        dogYear = 0;
    }
    print(`${dogYear}`);
}

solve(4);