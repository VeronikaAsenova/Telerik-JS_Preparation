'use strict';

//1st task => Assign all the possible JavaScript literals to different variables.

const name="Veronika";
const surname= "Vasileva";
let fammily= "Asenova";
let age=23;
let isBeautiful= true;
let weight=56.5;
const hight=166;

//2nd task=> Create a string variable with quoted text in it. For example: 'How you doin'?', Joey said'.

let quotedText= "'How you doin?', Joey said";
console.log(quotedText);

//3rd task => Try typeof on all variables you created.

console.log(typeof name);
console.log(typeof surname);
console.log(typeof fammily);
console.log(typeof age);
console.log(typeof isBeautiful);
console.log(typeof weight);
console.log(typeof hight);

//4th task => Create null, undefined variables and try typeof on them.

let nameDog;
let year=null;
console.log(nameDog);
console.log(year);

//5th task => Try parsing the following strings to numbers using parseInt, parseFloat, Number, + and | 0. Fill the answers for yourself in the table below.

let string1 ="1234";
let string2="1238abc";
let string3="0.15";
let string4="3.14ivan";
let string5="Infinity";
let string6="99999999999999999999";

console.log(parseInt(string1));
console.log(parseFloat(string1));
console.log(Number(string1));
console.log(+string1);
console.log(string1|0);

console.log("\n");
console.log(parseInt(string2));
console.log(parseFloat(string2));
console.log(Number(string2));
console.log(+string2);
console.log(string2|0);

console.log("\n");
console.log(parseInt(string3));
console.log(parseFloat(string3));
console.log(Number(string3));
console.log(+string3);
console.log(string3|0);

console.log("\n");
console.log(parseInt(string4));
console.log(parseFloat(string4));
console.log(Number(string4));
console.log(+string4);
console.log(string4|0);

console.log("\n");
console.log(parseInt(string5));
console.log(parseFloat(string5));
console.log(Number(string5));
console.log(+string5);
console.log(string5|0);

console.log("\n");
console.log(parseInt(string6));
console.log(parseFloat(string6));
console.log(Number(string6));
console.log(+string6);
console.log(string6|0);