// function displayNum(num) {
//     displayNum(num);
// }

// console.log(displayNum(4));

// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

//1 - 3*factorial(2);
//2 - 2*factorial(1);
//3 - 1*factorial(0);
//4 - returns 1

const num = 3;
// calling factorial() if num is non-negative
let result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);
