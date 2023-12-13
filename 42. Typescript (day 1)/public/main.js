"use strict";
function getAreaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
let x = getAreaCircle(2.2);
console.log(x);
function generateId(num = 0) {
    //narrowing
    if (typeof num === 'number') {
        return num * 152;
    }
    else {
        return (Math.random() * 10).toString();
    }
}
generateId();
generateId(23);
let title = "Web Developer"; //explicit
let employee;
employee = {
    fullName: 'sedg',
    id: 2135,
    age: 23,
    income: 2000,
};
let numbers = [];
let studentNames = [];
let isDone = [];
let students = [];
students.push({ fname: 'aeg', age: 22, grade: 22 });
let skill; //tuple
let color = [255, 0, 0];
color = [12, 43, 563];
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["Rejected"] = "rejected";
    RequestStatus["Pending"] = "pending";
    RequestStatus["Accepted"] = "accepted";
})(RequestStatus || (RequestStatus = {}));
;
var Size;
(function (Size) {
    Size[Size["XS"] = 0] = "XS";
    Size[Size["S"] = 1] = "S";
    Size[Size["M"] = 2] = "M";
    Size[Size["L"] = 3] = "L";
    Size[Size["XL"] = 4] = "XL";
    Size[Size["XXL"] = 5] = "XXL";
})(Size || (Size = {}));
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    let isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Nov));
function raiseError(message) {
    throw new Error(message);
}
function inifiniteLoop() {
    while (true) {
    }
}
function sum(a, b) {
    if (a > 0 && b > 0) {
        return a + b;
    }
    else {
        return 0;
    }
}
sum(2, 3);
let elgun = {
    id: 'esrfebjwner',
    fullName: 'Elgun',
    age: 20,
    sayHello: () => {
        console.log('hello');
    }
};
class Human {
    constructor(id, fullName, age) {
        this.sayHello = () => {
            console.log('hello');
        };
        this.getBirthYear = () => {
            const currentYear = new Date().getFullYear();
            return currentYear - this.age;
        };
        this.id = id;
        this.fullName = fullName;
        this.age = age;
    }
}
let elnur = new Human(12344, 'elnur khalilov', 22);
console.log(elnur.getBirthYear());
let square = {
    kind: 'square',
    colorName: 'red'
};
// let grade1: Grade = 71;
let mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error
