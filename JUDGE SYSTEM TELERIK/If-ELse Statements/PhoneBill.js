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
    '20',
    '60'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

//fixed Prices and conditions
const planMinutes = 60;
const planTextMessages = 20;
const additionalPriceMinute = 0.1;
const additionalPriceMessage = 0.06;
const planPrice = 12;
const salesTax = 0.2;

//input values
let usedTextMessages = +gets();
let usedMinutes = +gets();

//calculations

// let differenceMessages = usedTextMessages - planTextMessages;
// // if differenceMessages < 0 => differenceMessages = 0
// if (differenceMessages < 0) {
//     differenceMessages = 0
// }

let differenceMessages = usedTextMessages > planTextMessages ?
    usedTextMessages - planTextMessages :
    0;

let differenceCalls = usedMinutes - planMinutes;
// if differenceCalls < 0 => differenceCalls = 0
if (differenceCalls < 0) {
    differenceCalls = 0
}

let priceAdditionalMessages = differenceMessages * additionalPriceMessage;
let priceAdditionalMinutes = differenceCalls * additionalPriceMinute;
let paidTaxes = (priceAdditionalMinutes + priceAdditionalMessages) * salesTax;
let totalBill = planPrice + priceAdditionalMinutes + priceAdditionalMessages + paidTaxes;

print(differenceMessages + ' additional messages for ' + priceAdditionalMessages.toFixed(2) + " levas");
print(differenceCalls + ' additional minutes for ' + priceAdditionalMinutes.toFixed(2) + " levas");
print(paidTaxes.toFixed(2) + ' additional taxes');
print(totalBill.toFixed(2) + ' total bill');

