//Human - name,surname,birthYear,hobbies(array),address(object-city,street).isMale
//getter - fullname, age
//method - getFullName, getAge, getInfo(name surname lives in city)
//birthYear - private

//Employee -> Human
//-> salary, experienceYear, position, spendings
//salary -> private
//methods -> getInfo(name surname works as position)
//methods -> getProfit() -> qazanci hesablayir

//Student -> Human
// -> groupNo, GPA(80< , 80> <90, 90>), stipendiya
// -> getInfo(name surname studies in groupNo)
// -> studentInfo(elaci, zerbeci, adi)

class Human {
  //properties
  name;
  surname;
  #birthYear;
  hobbies;
  address;
  isMale;
  //constructor
  constructor(name, surname, birthYear, hobbies, address, isMale) {
    this.name = name;
    this.surname = surname;
    this.#birthYear = birthYear;
    this.hobbies = hobbies;
    this.address = address;
    this.isMale = isMale;
  }
  //getter
  get age() {
    return this.getAge();
  }
  get fullName() {
    return this.getFullName();
  }
  //methods
  getFullName() {
    return this.name + " " + this.surname;
  }
  getAge() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.#birthYear;
  }
  getInfo() {
    console.log(`${this.name} ${this.surname} lives in ${this.address?.city}`);
  }
}

class Employee extends Human {
  #salary;
  experienceYear = 0;
  position;
  spending;
  constructor(
    name,
    surname,
    birthYear,
    hobbies,
    address,
    isMale,
    salary,
    experienceYear,
    position,
    spending
  ) {
    super(name, surname, birthYear, hobbies, address, isMale);
    this.#salary = salary;
    this.experienceYear = experienceYear;
    this.position = position;
    this.spending = spending;
  }
  //methods
  getInfo() {
    super.getInfo();
    console.log(`${this.fullName} works as ${this.position}`);
  }
  getProfit() {
    console.log(
      `${this.fullName} profits ${this.#salary - this.spending} every month`
    );
  }
}

class Student extends Human {
  stipendiya = 0;
  constructor(
    name,
    surname,
    birthYear,
    hobbies,
    address,
    isMale,
    groupNo,
    GPA
  ) {
    super(name, surname, birthYear, hobbies, address, isMale);
    this.GPA = GPA;
    this.groupNo = groupNo;
    this.studentData = '';
  }
  getInfo() {
    super.getInfo();
    console.log(`${this.fullName} studies in ${this.groupNo}`);
  }
  setStudentStipendiya() {
    if (this.GPA > 90) {
      this.studentData = "elachi";
      this.stipendiya = 172;
    } else if (this.GPA < 90 && this.GPA > 80) {
      this.studentData = "zerbeci";
      this.stipendiya = 145;
    } else {
      this.studentData = "adi";
      this.stipendiya = 100;
    }
  }
}

//#region Human object
// const Turxan = new Human(
//   "Turxan",
//   "Tomayev",
//   2003,
//   ["gym", "football"],
//   { city: "Baku", street: "Nizami kuc." },
//   true
// );
// Turxan.getInfo();

//#endregion

//#region Emoloyee Object
// const TurxanEmployee = new Employee(
//     "Turxan",
//     "Tomayev",
//     2003,
//     ["gym", "football"],
//     { city: "Baku", street: "Nizami kuc." },
//     true,
//     2000,
//     2,
//     "frontend dev",
//     500
//   );
//   console.log(TurxanEmployee);
//   TurxanEmployee.getInfo();
//   TurxanEmployee.getProfit();
//#endregion

//#region Student Object
const TurxanStudent = new Student(
  "Turxan",
  "Tomayev",
  2003,
  ["gym", "football"],
  { city: "Baku", street: "Nizami kuc." },
  true,
  'AF103',
  98
);

TurxanStudent.getInfo();
TurxanStudent.setStudentStipendiya();
console.log(TurxanStudent);
// TurxanStudent.studentInfo();
//#endregion
