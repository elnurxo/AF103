var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 4;
var y = 'werh';
var z = true;
var fixed = ['wrghnwr', 4];
var Weekday;
(function (Weekday) {
    Weekday["Monday"] = "monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
})(Weekday || (Weekday = {}));
;
var events;
var Human = /** @class */ (function () {
    function Human(fullName, age) {
        this.fullName = fullName;
        this._age = age;
    }
    Object.defineProperty(Human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge < 18) {
                console.log('age cannot be less than 18');
            }
            else {
                this._age = newAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.getInfo = function () {
        console.log("full name: ".concat(this.fullName, ", age: ").concat(this._age));
    };
    return Human;
}());
var nicat = new Human('nicat', 22);
nicat.age = 16;
console.log(nicat);
var Animal = /** @class */ (function () {
    function Animal(name, _age) {
        this._age = _age;
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "age", {
        // getter
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge > 18) {
                this._age = newAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.getInfo = function () {
        console.log("full name: ".concat(this.name, ", age: ").concat(this._age));
    };
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingColor) {
        var _this = _super.call(this, name, age) || this;
        _this.wingColor = wingColor;
        return _this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " flies with ").concat(this.wingColor, " wings"));
    };
    Bird.prototype.sayHi = function () {
        console.log('hi');
    };
    return Bird;
}(Animal));
//fish
var livePlace;
(function (livePlace) {
    livePlace[livePlace["Sea"] = 0] = "Sea";
    livePlace[livePlace["River"] = 1] = "River";
    livePlace[livePlace["Ocean"] = 2] = "Ocean";
    livePlace[livePlace["Aquarium"] = 3] = "Aquarium";
})(livePlace || (livePlace = {}));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, livePlace, _kill) {
        var _this = _super.call(this, name, age) || this;
        _this._kill = _kill;
        _this.livePlace = livePlace;
        return _this;
    }
    Object.defineProperty(Fish.prototype, "kill", {
        //getter
        get: function () {
            return this._kill;
        },
        enumerable: false,
        configurable: true
    });
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " swims in ").concat(livePlace[this.livePlace]));
    };
    return Fish;
}(Animal));
var robin = new Bird('Robin', 2, 'red');
robin.getInfo();
robin.fly();
var nemo = new Fish('nemo', 1, livePlace.Ocean, ['plankton', 'dory']);
console.log(nemo);
nemo.getInfo();
nemo.swim();
console.log(nemo.kill);
//singleton
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    Employee.headcount = 0;
    Employee.intance = new Employee('elnur', 'khalilov', 'web dev');
    return Employee;
}());
console.log(Employee.intance);
var paragraph = document.querySelector('p');
var title = document.querySelector('#title');
title.className = 'salam';
var image = document.createElement('form');
var loginForm = document.querySelector('form');
loginForm.addEventListener('click', function (e) {
    e.preventDefault();
});
var count = 2;
paragraph.textContent = "".concat(count);
