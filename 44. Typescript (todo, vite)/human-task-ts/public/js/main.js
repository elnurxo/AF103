"use strict";
//enums
var Position;
(function (Position) {
    Position[Position["dev"] = 0] = "dev";
    Position[Position["designer"] = 1] = "designer";
    Position[Position["marketing"] = 2] = "marketing";
    Position[Position["smm"] = 3] = "smm";
    Position[Position["hr"] = 4] = "hr";
    Position[Position["ceo"] = 5] = "ceo";
})(Position || (Position = {}));
//classes
class Human {
    constructor(_fname, _surname, age) {
        this._fname = _fname;
        this._surname = _surname;
        if (age < 0) {
            throw new Error("age cannot be negative!");
        }
        else {
            this.age = age;
        }
    }
    //getters
    get fname() {
        return this._fname;
    }
    get surname() {
        return this._surname;
    }
    get fullName() {
        return (this._fname + ' ' + this._surname);
    }
    //methods
    getInfo() {
        return `${this.fullName} is ${this.age} years old`;
    }
}
class Student extends Human {
    constructor(fname, surname, age, GPA, groupName, hobbies) {
        super(fname, surname, age);
        if (GPA < 0 || GPA > 100) {
            this._GPA = 0;
        }
        else {
            this._GPA = GPA;
        }
        this.groupName = groupName;
        this.hobbies = hobbies;
    }
    //getters
    get GPA() {
        return this._GPA;
    }
    //setters
    set GPA(value) {
        if (value >= 0 && value <= 100) {
            this._GPA = value;
        }
    }
    //methods
    hasPassed() {
        if (this._GPA < 50) {
            return false;
        }
        else {
            return true;
        }
    }
    //method override
    getInfo() {
        return `${this.fullName} studies in ${this.groupName} & has GPA: ${this._GPA}`;
    }
}
class Employee extends Human {
    constructor(fname, surname, age, salary, skills, position) {
        super(fname, surname, age);
        this.salary = salary;
        this.skills = skills;
        this.position = position;
    }
    //method override
    getInfo() {
        return `${this.fullName} is ${Position[this.position]} & get paid: ${this.salary}$`;
    }
}
var selectType;
(function (selectType) {
    selectType[selectType["student"] = 0] = "student";
    selectType[selectType["employee"] = 1] = "employee";
})(selectType || (selectType = {}));
//html template
let humanType = document.querySelector('#type');
let employeeBlock = document.querySelector(".employee");
let studentBlock = document.querySelector(".student");
let form = document.querySelector('form');
let peopleList = document.querySelector('#people');
//form field
let fnameInp = document.querySelector("#fname");
let surnameInp = document.querySelector("#surname");
let ageInp = document.querySelector("#age");
let salaryInp = document.querySelector("#salary");
let skillsInp = document.querySelector("#skills");
let positionInp = document.querySelector("#position");
let groupNameInp = document.querySelector("#groupName");
let gpaInp = document.querySelector("#gpa");
let hobbiesInp = document.querySelector("#hobbies");
humanType.addEventListener('change', (e) => {
    if (e.target instanceof HTMLSelectElement) {
        if (e.target.value == (selectType.student).toString()) {
            studentBlock.classList.replace("hide", "show");
            employeeBlock.classList.replace("show", "hide");
        }
        else {
            employeeBlock.classList.replace("hide", "show");
            studentBlock.classList.replace("show", "hide");
        }
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(humanType.value);
    if (humanType.value == '0') {
        //student 
        const hobbiesArr = hobbiesInp.value.split(',');
        const stu = new Student(fnameInp.value, surnameInp.value, Number(ageInp.value), Number(gpaInp.value), groupNameInp.value, hobbiesArr);
        const newItem = document.createElement('li');
        newItem.textContent = stu.getInfo();
        peopleList.append(newItem);
        console.log('added student: ', stu);
        resetForm();
    }
    else {
        //employee
        const skillsArr = skillsInp.value.split(',');
        const emp = new Employee(fnameInp.value, surnameInp.value, Number(ageInp.value), Number(salaryInp.value), skillsArr, Number(positionInp.value));
        const newItem = document.createElement('li');
        newItem.textContent = emp.getInfo();
        peopleList.append(newItem);
        console.log('added employee: ', emp);
        resetForm();
    }
});
function resetForm() {
    fnameInp.value = '';
    surnameInp.value = '';
    ageInp.value = '';
    salaryInp.value = '';
    skillsInp.value = '';
    positionInp.value = '0';
    groupNameInp.value = '';
    gpaInp.value = '';
    hobbiesInp.value = '';
    if (employeeBlock.classList.contains('show')) {
        employeeBlock.classList.replace('show', 'hide');
    }
    if (studentBlock.classList.contains('show')) {
        studentBlock.classList.replace('show', 'hide');
    }
    humanType.value = 'default';
}
