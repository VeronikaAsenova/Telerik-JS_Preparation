'use strict';

function solve(args) {

    let aString = args[0];
    let a = +aString;

    let bString = args[1];
    let b = +bString;

    let cString = args[2];
    let c = +cString;

    const formulaDiscriminant = Math.pow(b, 2) - 4 * a * c;
    console.log(`Discriminant is ${formulaDiscriminant}`)

    if (formulaDiscriminant > 0) {
        console.log(`There is two real roots: `)
        const root1 = ((-b + (Math.sqrt(formulaDiscriminant))) / (2 * a));
        console.log(`First root is x1= ${root1}`);

        const root2 = ((-b - (Math.sqrt(formulaDiscriminant))) / (2 * a));
        console.log(`Second root is x2= ${root2}`);

    }

    else if (formulaDiscriminant == 0) {
        console.log(`There is one real root: `)

        const root1x = ((-b) / (2 * a));
        console.log(`The only real root is x1=x2= ${root1x}`);

    }
    else {
        console.log(`no real roots`);
    }
}

let array = ['0.2', '9.572', '0.2'];
solve(array);