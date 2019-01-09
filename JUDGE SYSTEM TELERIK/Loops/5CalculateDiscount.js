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
    '2',
    '20',
    '50'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numberOfItems = +gets();
const discount = 0.65;

for (let i = 0; i < numberOfItems; i++) {
    const price = +gets();
    const discountedPrice = price - (price * discount);

    print(discountedPrice.toFixed(2));
}

