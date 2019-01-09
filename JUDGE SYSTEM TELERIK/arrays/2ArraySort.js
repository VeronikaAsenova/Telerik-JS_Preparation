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
    "0,1,0,3,12"
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(","); //маха запетайките и ги превръща в стринг т.е от 1,2,3,4 става 1 2 3 4 
let noZeroes = [];
let zeroes = [];

for (const current of input) {
    if (current === "0") {
        zeroes.push(current);
    } else {
        noZeroes.push(current);
    }
}

let result = noZeroes.concat(zeroes); //конкатенира 
print(result.join(",")); // разделя със запетаи
