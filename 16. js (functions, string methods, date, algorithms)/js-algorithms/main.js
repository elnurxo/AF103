let num = [1, 2, 4, 6, 7, 8, 9]; //linear
let num2 = [1, 2, 4, 6, 7, 8, 9]; //linear
//worst case
//best case
//#region Find Num search
function FindNum(findNum, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (num[i] == findNum) {
      console.log("found number");
      break;
    }
  }
  return count;
}
// let result = FindNum(9, num);
// console.log(`iteration count: ${result}`);
//#endregion

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num2.length; j++) {
       
    }
}