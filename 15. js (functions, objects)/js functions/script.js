//regular, anonym/function expression, arrow function

//Regular
//parametrs
// function Calculate(num1, num2) {
//   if (num1 > 0 && num2 > 0) return num1 + num2;
//   return 0;
// }
// function displayFullname(name, surname) {
//   console.log(`${name} ${surname}`);
//   return `${name} ${surname}`;
// }
//return - void & return type (string,array,number etc.)

//function declaration
// function Greet() {
//     console.log('hi');
// }

//function call
//arguments
// Greet();

//regular
// const Sum =()=> {
//   let sum = 0;
//   // for (let i = 0; i < arguments.length; i++) {
//   //     sum += arguments[i];
//   // }
//   console.log(arguments);
//   return sum;
// }
// console.log(Sum(3,4,5,7,10)); //arguments
//anonym - function expression
// const SumAnonym = function (num1, num2 = 0) {
//   return num1 + num2;
// };

//num1,num2 => undefined
// let result = SumAnonym(4);
// console.log(result);

//arrow function //ECMA 6
//ternary if operator
// (condition) ? alert : log
// const SumArrow = (num1, num2) => (num1>0 && num2>0) ? num1+num2 : num1*num2;

// console.log(SumArrow(4, 2));

// function createPerson(name, surname, age, isMale) {
//   let person = {
//     name: name,
//     surname,
//     age,
//     isMale,
//   };
//   return person;
// }

// let person = createPerson('Elnur','Khalilov',22,true);
// console.log(person);

// function findAge(name,birthYear,birthPlace) {
//   const date = new Date();
//   const currentYear = date.getFullYear();
//   let result = (`${name} is ${currentYear-birthYear} years old and was born in ${birthPlace}`)
//   return result
// }



