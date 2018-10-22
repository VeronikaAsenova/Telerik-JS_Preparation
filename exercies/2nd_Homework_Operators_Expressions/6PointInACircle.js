'use strict';

function solve(args) {

    const circleX = 0;
    const circleY = 0;
    const radius = 2;

    let x = args[0];
    let y = args[1];

    const formulaCircle = (Math.pow(x - circleX),2) + (Math.pow(y - circleY),2);

    if (formulaCircle > radius) {
        console.log(`no DISTANCE ${x},${y}`)
    } else if (formulaCircle < radius) {
        console.log(`yes DISTANCE  ${x}, ${y}`)
    } else {
        console.log(`lies on the center `);
    }
}

let elements = [2, 4];
solve(elements);