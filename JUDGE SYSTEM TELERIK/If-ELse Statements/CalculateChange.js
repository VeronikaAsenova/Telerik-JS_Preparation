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
    '76',
    '10'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let price = (+gets() * 100).toFixed(2);
let provided = (+gets() * 100).toFixed(2);
let change = +gets();


if (provided > price) {
    print("The customer should be given the change as follows:");
    change = provided - price;
    // Since you multiplied by 100 you have to divide by 2000 to get the number of twenties for change.

    let twenties = change / 2000;
    if (twenties > 0) {  //if the change is less than $20 this will be a zero
        change = change % 2000; // this resets the value of change to the remainder after the twenties are calculated but only if there was at least enough to make one twenty 
        print(twenties + " $20 bill(s)");
    }
    let tens = change / 1000;
    if (tens > 0) {
        change = change % 1000;
        print(tens + " $10 bill(s)");
    }
    let fives = change / 500;
    if (fives > 0) {
        change = change % 500;
        print(fives + " $5 bill(S)");
    }
    let ones = change / 100;
    if (ones > 0) {
        change = change % 100;
        print(ones + " $1 bill(s)");
    }
    let quarters = change / 25;
    if (quarters > 0) {
        change = change % 25;
        print(quarters + " quarter coin(s)");
    }
    let dimes = change / 10;
    if (dimes > 0) {
        change = change % 10;
        print(dimes + " dime coin(s)");
    }
    let nickels = change / 5;
    if (nickels > 0) {
        change = change % 5;
        print(nickels + " nickel coin(s)");
    }
    let pennies = change;
    print(pennies + " penny coin(s)");
}
if (provided < price) {  // this statement is saying that if the customer doesn't pay enough, it will tell the user
    print("Not enough money!");
}
else if (provided == price) { // this statement says if the amount provided matches the price, then there is no change necessary
    print("No change is necessary!");

}