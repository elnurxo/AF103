function getAreaCircle(radius: number): number {
    return Math.PI*Math.pow(radius, 2);
}

let x: number = getAreaCircle(2.2);
console.log(x);

function generateId(num: number = 0): string | number{
    //narrowing
    if (typeof num === 'number') {
        return num*152;
    }
    else{
        return (Math.random()*10).toString();
    }
}

generateId(); 
generateId(23);

let title: string = "Web Developer"; //explicit


let employee: {
    fullName: string,
    id: string | number,
    age: number,
    income: number,
}


employee = {
    fullName: 'sedg',
    id: 2135,
    age: 23,
    income: 2000,
}

let numbers: number[] = [];
let studentNames: string[] = [];
let isDone: boolean[] = [];
let students: {fname:string,age:number,grade:number}[] = [];
students.push({fname:'aeg',age:22,grade: 22});

let skill: [number, number]; //tuple

let color: [number, number, number] = [255, 0, 0];
color = [12,43,563];

enum RequestStatus {
    Rejected = 'rejected', //enum member
    Pending = 'pending',
    Accepted = 'accepted'
};

enum Size{
    XS,
    S,
    M,
    L,
    XL,
    XXL
}

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month): boolean {
    let isSummer: boolean;
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


function raiseError(message: string): never {
    throw new Error(message);
}
function inifiniteLoop(): never {
    while (true) {
    }
}

function sum(a:number, b:number): number {
    if (a> 0 && b>0) {
        return a+b;
    }
    else{
        return 0;
    }
}

sum(2,3);

type UUID = (string | number);
type Person = {
    id: UUID,
    fullName: string,
    age: number,
    //method signature
    sayHello: ()=>void
}

let elgun: Person = {
    id: 'esrfebjwner',
    fullName: 'Elgun',
    age:20,
    sayHello: ()=>{
        console.log('hello');
    }
}

interface IHuman{
    id: UUID,
    fullName: string,
    age: number,

    //methods
    sayHello: () => void;
    getBirthYear: () => number;

}

class Human implements IHuman {
    public id: UUID;
    public fullName: string;
    public age: number;

    constructor(id: UUID, fullName: string, age: number){
        this.id = id;
        this.fullName = fullName;
        this.age = age;
    }

    sayHello: () => void = () => {
        console.log('hello');
    };
    getBirthYear: () => number = () => {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    };
}

let elnur: Human = new Human(12344,'elnur khalilov',22);
console.log(elnur.getBirthYear());


type Shape = {
    kind: string
};
type Color = {
    colorName: string
};
type ColorfulShape = Shape & Color;  //intersection

let square: ColorfulShape = {
    kind: 'square',
    colorName: 'red'
};


type Grade = 50 | 60 | 70 | 80 | 90; //literal string type


// let grade1: Grade = 71;

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error






