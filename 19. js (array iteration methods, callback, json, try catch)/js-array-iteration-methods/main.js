//forEach, map, filter, find, indexOf,lastIndexOf, some, every, reduce, reduceRight,
//flatMap, slice, splice, findIndex, Array.from, keys, values, entires, spread,
//sort, reverse, copyWithin, findLast, includes, fill

const aydan = {
  id: 1,
  name: "Aydan",
  surname: "Ramazanova",
  age: 21,
  city: "Baku",
};
const valide = {
  id: 2,
  name: "Valida",
  surname: "Memmedova",
  age: 20,
  city: "Sheki",
};
const fidan = {
  id: 3,
  name: "Fidan",
  surname: "Huseynzade",
  age: 22,
  city: "Zengilan",
};
const sema = {
  id: 4,
  name: "Sema",
  surname: "ELiyevaEW",
  age: 19,
  city: "Baku",
};
const ayan = {
  id: 5,
  name: "Ayan",
  surname: "Esgerli",
  age: 21,
  city: "Qazax",
};

let students = [ayan, aydan, sema, fidan, valide];

//#region ForEach
// students.forEach((item,idx,arr)=>{
//    sumAge+=item.age;
// })
//#endregion

//#region map
// const result = students.map((item)=>{
//     return (item.name+' '+item.surname);
// })
// console.log(result);
//#endregion

//#region Filter
// const search = prompt('search by fullname');
// const filterByAge = students.filter((value)=> (value.name.toLowerCase().trim().includes(search.toLowerCase().trim()) || value.surname.toLowerCase().trim().includes(search.toLowerCase().trim())))
// const filterbyCity = students.filter((item)=> item.city==='Baku');
// console.log(filterbyCity);
//#endregion

//#region Find
// const findValue = students.find((value)=>value.age<20)
// console.log(findValue)
//#endregion

//#region indexOf (not iteration method)
// let arr = [1,2,44,132,12,44,5];
// let idx = arr.indexOf(44,3);
//#endregion

//#region Find Index
// console.log(students);
// const idx = students.findIndex((item)=>item.name=='Aydan');
// console.log(idx);
//#endregion

//#region some (||)
// const found = students.some((item)=>item.age==22);
// console.log(found);
//#endregion

//#region every (&&)
// const found = students.every((item)=>item.city==='Baku');
// console.log(found);
//#endregion

//#region lastIndexOf
// let arr = [1,2,44,132,12,44,5];
// let idx = arr.lastIndexOf(44);
// console.log(idx)
//#endregion

//#region slice
// let arr = [1, 2, 6, 3, 4, 7];
// const res = arr.slice(3);
// console.log(res);
//#endregion

//#region splice (array element remove, array element add)
// let arr = [1, 2, 6, 3, 4, 7];
// let idx = arr.indexOf(6);
// const res = arr.splice(idx,1);
// console.log(res);
// console.log(arr);
//#endregion

//#region Array from
// let str = '1234';
// let arr = str.split('');
// let arr = Array.from(str,(item)=>item*10);
// console.log(arr);
//#endregion

//#region Spread operator, destructing
// let arr = [1,2,3,4];
// let newArr = {...arr};
// console.log(newArr);
//#endregion

//#region Sort (reverse)
let arr = [3,1,5,2,7];
// const sortedArr = arr.sort((x,y)=>y-x);
// console.log(sortedArr);
// const sortedStudents = students.sort((student1,student2)=>{
//     return student2.id-student1.id;
// })
// console.log(sortedStudents);
//#endregion

//#region Reduce (reduceRight)
// let sumAge = students.reduce((previousValue,currentValue)=>{
//     return previousValue + currentValue.id
// },0);

// console.log(sumAge);

//reduce Right
// let sumAge = students.reduceRight((previousValue,currentValue)=>{
//     return previousValue + currentValue.age
// },0);

// console.log(sumAge);
//#endregion

