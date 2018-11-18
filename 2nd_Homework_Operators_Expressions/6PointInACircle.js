'use strict';

function solve(args) {

    const circleCenterX = 0;
    const circleCenterY = 0;
    const radius = 2;

    const pointY = +args[1];
    const pointX = +args[0];

    const distance = (Math.pow(pointX - circleCenterX),2) + (Math.pow(pointY - circleCenterY),2);

    if (distance > radius) {
        console.log(`no ${distance}`);
    } else if (distance < radius) {
        console.log(`yes ${distance}`);
    } else {
        console.log(`lies on the center `);
    }
}

let elements =["2", "4"];
solve(elements);