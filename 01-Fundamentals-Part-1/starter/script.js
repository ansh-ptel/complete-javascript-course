// let js = 'amazing';
// console.log(40 + 8 - 2 + 23);

// console.log('Anshu');
// console.log(23);

// let firstName = 'Anshu';
// console.log(firstName);

// //Only use $ and _ as first letter for variable 
// let $functionVarName = 'Priyansh';
// let _functionVarName = 'Priyansh';

// let PI = 3.14;

// // let 3year = 3;

// // Name your variable Very descriptive 
// let myFirstJob = 'Software Engineer';
// let myCurrentJob = 'Software Engineer';

// //This is not a good practice
// let job1 = 'Teacher';
// let job2 = 'Programmer';

// console.log($functionVarName);

// A S S I G N M E N T - 1

// Declare variables called'country','continent'and'population'and assign their values according to your own country (population in millions)
// let country = 'India';
// let continent = 'Asia';
// let population = 'Too Much';

// console.log(country);
// console.log(continent);
// console.log(population);

/* 
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Anshu');


// Javascript dynamic Typing - changin variable type without let
javascriptIsFun = 'HeyAnshu !';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

//Undefined
let year;
console.log(year);
console.log(typeof year);
*/

/*
let age = 24;
//Reassigning value - Mutating variable 
age = 25;

const birthYear = 1998;
// Immutable varible - Const can't be change.
birthYear = 1999;

var job = 'Programmer';
//Never use var 
job = 'Proffessor';
*/

/*
//Mathematical Operator
const now = 2023;
const ageAnshu = now - 1998;
const agePriyansh = now - 1999;

console.log(ageAnshu, agePriyansh);
console.log(ageAnshu * 2, agePriyansh / 2);

const firstName = 'Anshu';
const lastName = 'Patel';
console.log(firstName + ' ' + lastName);

//Assignment Operators

let x = 10 + 5;
x += 10;
x *= 10;
x++;
x--;
x--;
console.log(x);

//Comparison Operator
console.log(ageAnshu > agePriyansh); //> , < , <= , >=
*/

/*
const now = 2023;
const ageAnshu = now - 1998;
const agePriyansh = now - 1999;

console.log(now - 1998 > now - 1995);

//OPerator Precedence 
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageAnshu + agePriyansh) / 2;
console.log(ageAnshu, agePriyansh, averageAge)
*/

/* Write your code below. Good luck! 🙂 
let massMark, heightMark, massJohn, heightJohn;
massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJhon = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJhon);

let markHigherBMI = BMIMark > BMIJhon;
console.log(markHigherBMI);
*/

/*
// TEMPLATE LITERALs
const firstName = 'Anshu';
const job = 'Programmer';
const birthYear = 1998;
const year = 2023;

const anshu = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(anshu);

const anshuNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(anshuNew);

//Without using(Template Literals) `` 
console.log('String with \n\
Multiple \n\
lines');

//With using ``
console.log(`String with
Template Literals
woow`);
*/

const age = 15;

if (age >= 18) {
    console.log(`Anshu can start driving license 🚘`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Anshu is too young, wait another ${yearsLeft} years :`);
}

const birthYear = 2002;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)