//interfaces
interface IHuman{
    fname: string;
    surname: string;
    age: number;
    getInfo:()=>string
}
interface IEmployee<T>{
    salary: number;
    skills: T;
    position: Position,
}
interface IStudent<Type>{
    groupName: string;
    hobbies: Type;
    GPA: number;
    hasPassed: ()=> boolean;
}
//enums
enum Position{
    dev,
    designer,
    marketing,
    smm,
    hr,
    ceo
}
//classes
abstract class Human implements IHuman{

    age: number;

    constructor(private _fname: string,private _surname: string,age:number){
        if (age<0) {
            throw new Error("age cannot be negative!");
        }
        else{
            this.age = age;
        }
    }

    //getters
    get fname(){
        return this._fname
    }
    get surname(){
        return this._surname;
    }
    get fullName(){
        return (this._fname + ' '+ this._surname);
    }
    //methods
    getInfo():string{
        return `${this.fullName} is ${this.age} years old`;
    }
}

class Student extends Human implements IStudent<string[]>{
    private _GPA:number;
    public groupName: string;
    public hobbies: string[];

    constructor(fname: string, surname: string, age: number, GPA: number, groupName: string, hobbies: string[]){
        super(fname,surname,age);
        if (GPA<0 || GPA>100) {
            this._GPA = 0;
        }
        else{
            this._GPA = GPA;
        }
        this.groupName = groupName;
        this.hobbies = hobbies;
    }

    //getters
    get GPA(){
        return this._GPA;
    }
    //setters
    set GPA(value:number){
        if (value>=0 && value<=100) {
            this._GPA = value;
        }
    }

    //methods
    hasPassed():boolean{
        if (this._GPA<50) {
            return false;
        }
        else{
            return true;
        }
    }
    //method override
    getInfo(): string {
       return `${this.fullName} studies in ${this.groupName} & has GPA: ${this._GPA}`;
    }
}

class Employee extends Human implements IEmployee<string[]>{

    salary: number;
    skills: string[];
    position: Position;

    constructor(fname:string,surname:string,age:number,salary:number,skills: string[],position:Position){
        super(fname,surname,age);
        this.salary = salary;
        this.skills = skills;
        this.position = position;
    }

    //method override
    getInfo(): string {
       return `${this.fullName} is ${Position[this.position]} & get paid: ${this.salary}$`;
    }
}
enum selectType{
    student ,
    employee 
}

//html template
let humanType = document.querySelector('#type') as HTMLSelectElement;
let employeeBlock = document.querySelector<HTMLDivElement>(".employee")!;
let studentBlock = document.querySelector<HTMLDivElement>(".student")!;
let form = document.querySelector('form') as HTMLFormElement;
let peopleList = document.querySelector('#people') as HTMLUListElement;
//form field
let fnameInp = document.querySelector<HTMLInputElement>("#fname")!;
let surnameInp =  document.querySelector<HTMLInputElement>("#surname")!;
let ageInp =  document.querySelector<HTMLInputElement>("#age")!;
let salaryInp =  document.querySelector<HTMLInputElement>("#salary")!;
let skillsInp = document.querySelector<HTMLInputElement>("#skills")!;
let positionInp =  document.querySelector<HTMLInputElement>("#position")!;
let groupNameInp = document.querySelector<HTMLInputElement>("#groupName")!;
let gpaInp = document.querySelector<HTMLInputElement>("#gpa")!;
let hobbiesInp  = document.querySelector<HTMLInputElement>("#hobbies")!;

humanType.addEventListener('change',(e: Event)=>{
    if (e.target instanceof HTMLSelectElement) {
        if (e.target.value==(selectType.student).toString()) {
            studentBlock.classList.replace("hide","show");
            employeeBlock.classList.replace("show","hide");
        }
        else{
            employeeBlock.classList.replace("hide","show");
            studentBlock.classList.replace("show","hide");
        }
    }
});

form.addEventListener('submit',(e: SubmitEvent)=>{
    e.preventDefault();
    
    console.log(humanType.value)

    if (humanType.value == '0') {
        //student 
        const hobbiesArr = hobbiesInp.value.split(',');
        const stu = new Student(fnameInp.value, surnameInp.value, Number(ageInp.value), Number(gpaInp.value), groupNameInp.value,hobbiesArr);
        const newItem = document.createElement('li');
        newItem.textContent = stu.getInfo();
        peopleList.append(newItem);
        console.log('added student: ', stu);
        resetForm();
    }
    else{
        //employee
        const skillsArr = skillsInp.value.split(',');
        const emp = new Employee(fnameInp.value,surnameInp.value, Number(ageInp.value), Number(salaryInp.value),skillsArr,Number(positionInp.value));
        const newItem = document.createElement('li');
        newItem.textContent = emp.getInfo();
        peopleList.append(newItem);
        console.log('added employee: ', emp);
        resetForm();
    }
})

function resetForm():void {
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
        employeeBlock.classList.replace('show','hide');
    }
    if (studentBlock.classList.contains('show')) {
        studentBlock.classList.replace('show','hide');
    }

    humanType.value = 'default';
}




