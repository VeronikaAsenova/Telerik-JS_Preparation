'use strict';

function solve(args) {

    const circleX = 1;
    const circleY = 1;
    const circleRadius = 1.5;


    let elX = args[0];
    let elY = args[1];

    const formulaCircle = (Math.pow(elX - circleX), 2) + (Math.pow(elY - circleY), 2);

    if (formulaCircle > circleRadius) {
        console.log(`Outside circle ${elX},${elY}`)
    } else if (formulaCircle < circleRadius) {
        console.log(`Inside circle  ${elX}, ${elY}`)
    } else {
        console.log(`Lies on the center `);
    }


    const rectangleTop = 1;
    const rectangleLeft = -1;
    const rectangleWidth = 6;
    const rectangleHeight = 2;
    

}

let elements = [1.1, 2.2];
solve(elements);

// make it work for a rectangle