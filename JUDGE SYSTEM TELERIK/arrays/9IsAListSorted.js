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
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2'
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const tries = gets();

let answer;


for (let i = 1; i <= tries; i++) {
    let list = gets().split(',').map(el => +el);
    let currentDigit = 0;
    let result = 'false';

    for (let j = 0; j <= list.length-1; j++) {
        if( list[j] >= currentDigit ){
            currentDigit = j;
            result = 'true';
        }else{
            result = 'false';
            break;
        }
    }
    print(result);
} 


