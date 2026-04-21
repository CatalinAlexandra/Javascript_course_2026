/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(25);

let firstName = 'Jonas';
let first = 'jonas';
let firstNamePerson = 'Jonas Schmedtmann';
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; 


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


//Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


const firstName = 'Catalina';
const job = 'joke';
const birthYear = 1997;
const year = 2026;

const catalina =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(catalina);

const catalinaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(catalinaNew);


const age = 19;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Challenge 2

const Markweight = 78;
const Markheight = 1.69;
const Johnweight = 92;
const Johnheight = 1.95;
const MarkBMI = Markweight / Markheight ** 2;
const JohnBMI = Johnweight / Johnheight ** 2;
console.log(MarkBMI, JohnBMI);

if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
} else {
  console.log(`John's BMI (${JohnBMI}) is higher than Mark's  (${MarkBMI})!`);
}

//TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN
console.log(typeof NaN);

console.log(String(23), 23);
//TYPE COERCION
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 12) {
  console.log('Cool! 12 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 12) console.log('Why not 12?');

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


//Challenge 3 // MY SOLVING
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// const minimumScore = 100;
// if (minimumScore === 100) {
//   console.log('Dolphins score is ' + scoreDolphins);
// } else {
//   console.log('Koalas score is' + scoreKoalas);
// }
// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins score is higher than Koalas');
// } else {
//   console.log('Koalas score is higher than Dolphins');
// }

//SOLVE 1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy 🏆');
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
const minimumScore = 100;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
  console.log('Koalas win the trophy 🏆');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= minimumScore &&
  scoreKoalas >= minimumScore
) {
  console.log('Both win the trophy 🏆');
} else {
  console.log('No one wins the trophy 😥');
}

const day = 'monday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;

//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

const age = 28;
// age >= 18
//   ? console.log('I like to drink wine 🍷')
//   : console.log('I like to drink water 💧');
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

//CHALLENGE 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
);
