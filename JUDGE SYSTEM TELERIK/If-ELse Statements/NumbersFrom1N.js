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
    '6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();

for (let i = 1; i <= n; i++) {

    print(i + " ");
}
