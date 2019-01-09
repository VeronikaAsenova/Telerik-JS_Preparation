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
    '2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
const x = +gets();

for (let i = n; i = 1; i--) {
    n = (i - 1) * n;
}    print(n);
