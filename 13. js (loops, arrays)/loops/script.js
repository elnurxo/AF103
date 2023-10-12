// let monthNum = Number(prompt("enter month NO: "));
// let invalid = false;

// do {
//   switch (monthNum) {
//     case 1:
//     case 2:
//     case 12:
//       invalid = false;
//       alert("Winter");
//       break;
//     case 3:
//     case 4:
//     case 5:
//       invalid = false;
//       alert("Spring");
//       break;
//     case 6:
//     case 7:
//     case 8:
//       invalid = false;
//       alert("Summer");
//       break;
//     case 9:
//     case 10:
//     case 11:
//       invalid = false;
//       alert("Fall");
//       break;
//     default:
//       invalid = true;
//       alert("invalid input!");
//       monthNum = Number(prompt("try again: "));
//       break;
//   }
// } while (invalid);

//loops - for, while, do while, foreach, for in, for of

// let num = Number(prompt("enter number:")); //3
// let counter = 0;
// let students = "";

// while (counter<num) {
//     counter++;
//     students += (prompt(`enter name ${counter}: `)+" ");
// }
// alert(students);


//for, string, 
// let num = Number(prompt("enter number: "));
// let result = 1;
// for (let index = 1; index<=num;index++) {
//     result *= index;
// }
// alert(`factorial of ${num} is ${result}`);

// let fname = "salam";
// let reversedWord = "";
// for (let index = fname.length-1; index >= 0; index--) {
//     reversedWord += fname[index];
// }
// console.log(reversedWord); //malas


// let counter=0; //undefined
// while (counter<10) {
//     counter++;
//     console.log(counter);
// }

let num; //undefined
num = Number(prompt("enter number")); //12 -> 12 salam -> NaN

while (isNaN(num) || typeof num != "number") {
    alert(`error`);
    num = Number(prompt("enter number again: "));
}
alert('loop ended')