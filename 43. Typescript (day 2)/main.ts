let x: number = 4;
let y: string = 'werh';
let z: boolean = true;
let fixed: [string, number] = ['wrghnwr',4];
enum Weekday {
    Monday = 'monday',
    Tuesday = 1,
    Wednesday
};
let events: 'click' | 'dblclick' | 'change';
interface IHuman{
    fullName: string;
    age: number;
    getInfo:()=>void;
}
class Human implements IHuman {
    //access modifier
    public fullName: string;
    private _age : number;

    constructor(fullName: string, age: number){
        this.fullName = fullName;
        this._age = age;
    }

    get age(){
        return this._age;
    }

    set age(newAge: number){
        if (newAge<18) {
            console.log('age cannot be less than 18');
        }
        else{
            this._age = newAge;
        }
    }


    getInfo(): void {
        console.log(`full name: ${this.fullName}, age: ${this._age}`);
    }
}

const nicat = new Human('nicat',22);

nicat.age = 16;
console.log(nicat);

//Animal Task

interface IAnimal{
    name: string;
    age: number;
    //method signature
    getInfo: ()=>void;
}
abstract class Animal implements IAnimal{
    public name: string;

    constructor(name: string,  private _age: number){
        this.name = name;
    }

    // getter
    get age(){
        return this._age;
    }
    set age(newAge:number){
        if (newAge>18) {
            this._age = newAge;
        }
    }

    getInfo(): void {
        console.log(`full name: ${this.name}, age: ${this._age}`);
    }
}
//Birds, Fish
interface IBird{
    wingColor: string;
    fly: ()=>void;
}
class Bird extends Animal implements IBird{
    public wingColor: string;

    constructor(name: string, age: number, wingColor: string){
        super(name, age);
        this.wingColor = wingColor;
    }

    fly(): void{
        console.log(`${this.name} flies with ${this.wingColor} wings`);
    }
    sayHi():void{
        console.log('hi');
    }
}
//fish
enum livePlace {
    Sea,
    River,
    Ocean,
    Aquarium
}
type killType = string | string[];

interface IKill<T extends killType> {
    kill: T
}
interface IFish extends IKill<killType>{
    livePlace: livePlace
    swim:()=>void,
}
class Fish extends Animal implements IFish{
    public livePlace: livePlace;
    constructor(name: string, age: number, livePlace: livePlace,private _kill: killType){
        super(name,age);
        this.livePlace = livePlace;
    }

    //getter
    get kill(){
        return this._kill;
    }

    swim():void{
        console.log(`${this.name} swims in ${livePlace[this.livePlace]}`);
    }
}


const robin = new Bird('Robin',2,'red');
robin.getInfo();
robin.fly();

const nemo = new Fish('nemo',1,livePlace.Ocean,['plankton','dory']);

console.log(nemo);
nemo.getInfo();
nemo.swim();
console.log(nemo.kill);


//singleton
class Employee {
    static headcount: number = 0;

    // static instance = new Employee('elnur','khalilov','web dev');
    public static instance: Employee;
    private constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }

    public createInstance(fname: string, surname: string, position: string){
       Employee.instance = new Employee(fname, surname, position);
    }
}



const paragraph = document.querySelector('p') as HTMLParagraphElement;
const title = document.querySelector<HTMLHeadingElement>('#title')!;

title.className = 'salam';

const image = document.createElement('form');


const loginForm = document.querySelector('form') as HTMLFormElement;

loginForm.addEventListener('click',(e: Event)=>{
    e.preventDefault();
})

let count: number = 2;
paragraph.textContent = `${count}`;










