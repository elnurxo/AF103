//#region  Function Constructor
// function Human(name,surname,age=0) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
// function Student(groupNO,GPA) {
//     this.groupNO = groupNO;
//     this.GPA = GPA;
// }

// //object initialize
// let joe = new Human('Joe','Smith',22);
// let stundet1 = new Student('AF103',4.5);

// Object.setPrototypeOf(stundet1,joe);

// console.log(stundet1.name);
//#endregion

//#region Anonym classes
//anonym class
// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
//#endregion

//#region Generator Function *yield
// function* counter(value) {
//     while (true) {
//       const step = yield value++;

//       if (step) {
//         value += step;
//       }
//     }
//   }

//   const generatorFunc = counter(0);
//   console.log(generatorFunc.next().value); // 0
//   console.log(generatorFunc.next().value); // 1
//   console.log(generatorFunc.next().value); // 2
//   console.log(generatorFunc.next().value); // 3
//   console.log(generatorFunc.next(10).value); // 14
//   console.log(generatorFunc.next().value); // 15
//   console.log(generatorFunc.next(10).value); // 26
//#endregion

// class Rectangle {
//   //constructor - method
//   constructor(width, height) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

class Human {
  //object properties
  name;
  surname;
  #age = 0;
  isMarried = false;
  //constructor
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.#age = age;
  }
  //method
  getFullName() {
    return this.name + " " + this.surname;
  }
  //getter
  get fullName() {
    return this.getFullName();
  }
  //static property
  static userName = "admin";
  //static method
}

// const joe = new Human("Joe", "Smith", 22);
// console.log(joe.age);

class User{
    email;
    username;
    profilePicture = '';
    #password;
    constructor(email,username,password){
        this.email = email;
        this.username = username;
        this.#password = password;
    }
    //method
    login(username,password){
        if (this.username==username && this.#password==password) {
            return alert(`welcome back ${username}`);
        }
        else{
            return alert('wrong username or password!');
        }
    }
}

const elnurxo = new User('elnur@gmail.com','elnurxo','Admin123');
const eldarlrd = new User('elar@gmail.com','eldarlrd','Admin345');
elnurxo.login('elnurxo','Admin123');
console.log(elnurxo.password);
