class Animal {
  // name = '';
  constructor(name) {
    this.name = name;
  }
  //method
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  //static method
  static eat() {
    return 'ate!';
  }
}

class Dog extends Animal {
  constructor(name,owner) {
    super(name);
    this.owner = owner;
  }
  //method override
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal{
    constructor(name,age){
      super(name);
      this.age = age;
    }
    speak(){
      console.log(`${this.name} meows`);
    }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const dog1 = new Dog('Jack','Joe');
const cat1 = new Cat('Garfield',7);
const lion1 = new Lion('Lion King',23);
dog1.speak();
cat1.speak();
lion1.speak();
console.log('----');
console.log(Animal.eat());;