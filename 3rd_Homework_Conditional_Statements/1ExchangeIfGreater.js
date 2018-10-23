'use strict';

//Write an if statement that takes two double variables a and b and exchanges
//their values if the first one is greater than the second. As a result print the values a and b, separated by a space.

function solve(args) {

    let a = args[0];
    let b = args[1];
    let temp;

    if (a > b) {

        temp = a;
        a = b;
        b = temp;


        console.log(`The first number is greater than the second one so -> ${a}, ${b}`)
    }
    else {
        console.log(`The first number is greater than the second one so -> ${a}, ${b}`)
    }

}

let elements = [5.5, 4.5];
solve(elements);

