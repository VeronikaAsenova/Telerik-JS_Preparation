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
    'd',
    '5'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

if ((a > b) && (a > c) && (a > d) && (a > e)) {
   print(`${a}`);
}
else if ((b >= a) && (b >= c) && (b >= d) && (b >= e)) {
    print(`${b}`);
} else if ((c >= a) && (c >= b) && (c >= d) && (c >= e)) {
    print(`${c}`);
} else if ((d >= a) && (d >= c) && (d >= b) && (d >= e)) {
    print(`${d}`);
} else if ((e >= a) && (e >= c) && (e >= d) && (e >= b)) {
   print(`${e}`);
}