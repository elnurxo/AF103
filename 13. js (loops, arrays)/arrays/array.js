// let numbers = [1,2,3,4,5]; // integer array
// let students = ["Lachin","Aydan","Yagub"]; //string array
// console.log(numbers[numbers.length-1]);
// console.log(students[students.length-1]);

// let random = ["salam", 1, false, true, 5, 5.5, "sagol"];

// console.log(random[0][random[0].length-1]);

// let numbers = [1,2,3,4,5,6,7,8,9];
// let sum = 0;

// for (let index = 0; index < numbers.length; index++) {
//     if (index%2==1) {
//         sum += numbers[index];
//     }
// }
// console.log(sum);

// let AF103 = ["Aydan", "Sema","Kamran"];
// let AF203 = ["Kamran","Mehebbet","Aydan"];
// let count = 0;

// for (let i = 0; i < AF103.length; i++) {
//     for (let j = 0; j < AF203.length; j++) {
//         if (AF103[i] === AF203[j]) {
//             count++;
//         }
//     }
// }
// console.log(count);

// array - reference
// const nums = [1,2,3];
// console.log(nums[0]);
// nums[0] = "salam";
// console.log(nums[0]);

let nums1 = [1,2,3];
let nums2 = [2,3,4];

nums1 = nums2; //reference
nums2[0] = "salam";

console.log(nums1);
console.log(nums2);