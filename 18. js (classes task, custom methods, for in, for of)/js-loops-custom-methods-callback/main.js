//#region For In/For Of
// For Of
// const numbers = [3, 4, 6, 1, 2, 5];

// for (const num of numbers) {
//     console.log(num);
// }

// //For In
// const human = {
//     id: 1,
//     name: 'Elnur',
//     surname: 'Khalilov',
//     age: 23
// }

// for (const props in human) {
//   console.log(`${props}: ${human[props]}`);
// }
//#endregion

//#region  Custom methods for built in Classes
// let text = 'hello';
// String.prototype.myLength = function(){
//    let counter = 0;
//    while (this[counter]!==undefined) {
//         counter++;
//    }
//    return counter;
// }
// String.prototype.capitalize = function(){
//     let result = this.charAt(0).toUpperCase() + this.slice(1);
//     return result;
// }
// let numbers = [1,2,3,5];
// Array.prototype.sum = function(){
//     let sum = 0;
//     for (const num of numbers) {
//         sum+=num;
//     }
//     return sum;
// }
// Array.prototype.average = function(){
//     let sum = 0;
//     for (const num of numbers) {
//         sum+=num;
//     }
//     return Math.round(sum/numbers.length);
// }
// console.log(numbers.sum());
// console.log(numbers.average());
//#endregion

//#region Callbacks
// function
function displaySum(sum) {
    console.log(`sum is: ${sum}`);
}
function sum(num1,num2,clb) {
    let result = num1+num2;
    clb(result)
    return result;
}
let result = sum(3,6,displaySum);
console.log(result);

// passing function as an argument
//#endregion

let arr = [1,2,3];
