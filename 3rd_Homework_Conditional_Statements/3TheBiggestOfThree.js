'use strict';

function solve(args) {

    let numString1 = args[0];
    let num1 = +numString1;

    let numString2 = args[1];
    let num2 = +numString2;

    let numString3 = args[2];
    let num3 = +numString3;

    if (num1 > num2 && num1 > num3) {
        console.log(`The biggest number is ${num1}`)
    } else if (num2 > num1 && num2 > num3) {
        console.log(`The biggest number is ${num2}`);
    } else {
        console.log(`The biggest number is ${num3}`);
    }

}

let elements = ['-2', '-2', '1'];
solve(elements);