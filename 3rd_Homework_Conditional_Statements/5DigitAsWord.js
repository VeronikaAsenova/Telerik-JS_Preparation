'use strict';

//Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English). 
//Print not a digit in case of invalid input. Use a switch statement.

function solve(args) {

    let elString = args[0];
    let number = +elString;

    switch (number) {

        case 0:
            console.log(`${number} -> Zero`);
            break;
        case 1:
            console.log(`${number} -> One`);
            break;
        case 2:
            console.log(`${number} -> Two`);
            break;
        case 3:
            console.log(`${number} -> Three`);
            break;
        case 4:
            console.log(`${number} -> Four`);
            break;
        case 5:
            console.log(`${number} -> Five`);
            break;
        case 6:
            console.log(`${number} -> Six`);
            break;
        case 7:
            console.log(`${number} -> Seven`);
            break;
        case 8:
            console.log(`${number} -> Eight`);
            break;
        case 9:
            console.log(`${number} -> Nine`);
            break;
        default:
            console.log(`not a digit`);
            break;

    }

}

let element = ['7'];
solve(element);