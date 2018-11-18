'use strict';

function solve(args) {

    let number = +args[0];
    let prime = true;

    for (let i = 2; i <= number - 1; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }

    console.log(prime);

}
let elements = ["7"];
solve(elements);
