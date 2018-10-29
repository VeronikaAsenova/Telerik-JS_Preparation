'use strict';

//Implement a javascript function that accepts an array with a single element - 
//positive integer N as string and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

function solve(args) {

    let elements = args[0];

    for (let index = 1; index <= elements; index += 1) {

    }
    console.log(Array.from({ length: element }, (elements, index) => index).join(" "));

}

let element = ['10'];
solve(element);