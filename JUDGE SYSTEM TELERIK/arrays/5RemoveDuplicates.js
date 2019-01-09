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
    'c,a,b,a,b,c'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const list = gets().split(',');
const duplicates = [];
const right = [];

for (let i = 0; i < list.length; i++) {
    let current = list[i];
for (let j = 0; j < list.length; j++) {
   if(i!==j){
       right.push(list[i]);
    print(right);
    
}
}

// for (let index = 0; index < list.length; index++) {
//     if (list[index] === list[index + 1]) {
//         duplicates.push(list[index]);
//     }
//     else {
//         right.push(list[index]);
//     }

// }
// print(right.join(','));
