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
    '1975',

];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let year = +gets();

if ((year - 2000) % 12 === 0) {
    print("Dragon");
}
if ((year - 2000) % 12 === 1) {
    print("Snake");
}
if ((year - 2000) % 12 === 2) {
    print("Horse");
}
if ((year - 2000) % 12 === 3) {
    print("Sheep");
}
if ((year - 2000) % 12 === 4) {
    print("Monkey");
}
if ((year - 2000) % 12 === 5) {
    print("Rooster");
}
if ((year - 2000) % 12 === 6) {
    print("Dog");
}
if ((year - 2000) % 12 === 7) {
    print("Pig");
}
if ((year - 2000) % 12 === 8) {
    print("Rat");
}
if ((year - 2000) % 12 === 9) {
    print("Ox");
}
if ((year - 2000) % 12 === 10) {
    print("Tiger");
}
if ((year - 2000) % 12 === 11) {
    print("Hare");
}
