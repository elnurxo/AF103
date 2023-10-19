//Human Class
class Human {
  name;
  surname;
  #birthYear;
  birthPlace = { city: "", country: "" };
  constructor(name, surname, birthYear, birthPlace) {
    this.name = name;
    this.surname = surname;
    this.#birthYear = birthYear;
    this.birthPlace = birthPlace;
  }

  //methods
  getFullName() {
    return this.name + " " + this.surname;
  }
  getAge() {
    const currentYear = new Date().getFullYear(); //2023
    return currentYear - this.#birthYear;
  }
  //getter
  get age() {
    return this.getAge();
  }
  get fullName() {
    return this.getFullName();
  }
  //static methods
  static compareAge(human1, human2) {
    if (human1.age > human2.age) {
      return human1;
    } else if (human1.age === human2.age) {
      return `${human1.fullName} is as same age as ${human2.fullName}`;
    } else {
      return human2;
    }
  }
  static compareSameBirthCity(human1, human2) {
    return human1.birthPlace.city === human2.birthPlace.city;
  }
  //static property
  static displayName = "test";
}

//User Class
class User extends Human {
  #password;
  username;
  email;
  isLogged = false;
  constructor(name, surname, birthYear, birthPlace, email, username, password) {
    super(name, surname, birthYear, birthPlace);
    this.email = email;
    this.username = username;
    if (password === undefined) {
      //generate default password
      const birthYear = new Date().getFullYear() - this.age;
      const defaultPassword =
        this.birthPlace.city.slice(0, 2).toUpperCase() + birthYear;
      this.#password = defaultPassword;
    }
    else{
        this.#password = password;
    }
  }

  //methods
  login(username,password){
    if (this.username === username && this.#password === password) {
        this.isLogged = true;
        return alert(`welcome back ${this.fullName}`)
    }
    else{
        return alert(`incorrect username or password!`);
    }
  }
  logOut(){
    if (this.isLogged) {
        this.isLogged = false;
        return alert(`logged out successfully!`);
    }
    else{
        return alert(`you did not login!`);
    }
  }
}


//test
const elnurxo = new User('Elnur','Khalilov',2001,{country:'Russia',city:'Moscow'},'elnur@gmail.com','elnurxo'); //defaultPassword
const eldarb = new User('Eldar','Pashayev',1999,{country:'Azerbaijan',city:'Baku'},'eldar@gmail.com','eldarb','Admin123');

// console.log(Human.compareAge(elnurxo,eldarb));
// console.log(Human.compareSameBirthCity(eldarb,elnurxo));

// elnurxo.login('elnurxo','MO2001');
// elnurxo.logOut();

