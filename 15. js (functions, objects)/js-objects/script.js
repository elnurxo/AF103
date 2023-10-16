//reference
// const car = {
//   id: 1,
//   name: "BMW",
//   model: "X5",
//   color: "white",
//   isNew: false,
//   fuelfor1KM: 2, //1 km-e yandirdigi benzin
//   fuelCapacity: 40, //max ne qeder ola biler
//   currentFuel: 10, //hal-hazirda bakda
//   mileage: 80000, //probeq
//   year: 2016,
//   increaseFuel: function (fuel) {
//     if (fuel + this.currentFuel < this.fuelCapacity) {
//       this.currentFuel += fuel;
//     } else {
//       alert("capacity limit overflowed!");
//     }
//   },
//   drive(km) {
//     //hal-hazirda gede bileremmi?
//     if (this.currentFuel - this.fuelfor1KM * km >= 0 ) {
//         //gede biler
//         this.mileage += km;
//         this.currentFuel -= this.fuelfor1KM*km;
//         alert(`${km} km yol gedildi \nmileage: ${this.mileage} \ncurrent fuel: ${this.currentFuel}`)
//     }
//     else{
//         alert(`${this.currentFuel}lt. benzin ile ${km} km yolu gede bilmez!`)
//     }
//   },
// };

//function constructor
//#region Car Function Constructor
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}
//#endregion

function Employee(position, salary = 0) {
  this.position = position;
  this.salary = salary;
}
function Human(fullname,age,gender) {
    this.fullname = fullname;
    this.age = age;
    this.gender = gender
}
function Student(grade,groupNo) {
    this.grade = grade;
    this.groupNo = groupNo;
}

let emp1 = new Employee('Backend dev',2000);
let human1 = new Human('Elmir Ehmedov',22,'male');
let student1 = new Student(86.6,'AF203');

// console.log(student1);
Object.setPrototypeOf(emp1,human1);
console.log(emp1.fullname);

//Object create, Object assign,