"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.name = name;
    }
    Person.prototype.PrintAge = function (age) {
        this.age = age;
        console.log(this.age);
        this.PrintType("Solid");
    };
    Person.prototype.PrintType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Anurag", "Anura90");
console.log(person);
person.PrintAge(29);
var Asthana = (function (_super) {
    __extends(Asthana, _super);
    function Asthana(userName) {
        return _super.call(this, "Asthana", userName) || this;
    }
    return Asthana;
}(Person));
var asthana = new Asthana("Anura90");
console.log(asthana);
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calculateCircleArea = function (radius) {
        return this.PI * (radius * radius);
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calculateCircleArea(4));
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcbudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITproject = (function (_super) {
    __extends(ITproject, _super);
    function ITproject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITproject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITproject;
}(Project));
var newPrj = new ITproject();
console.log(newPrj);
newPrj.changeName("EYCOM");
console.log(newPrj);
var OnlyOne = (function () {
    function OnlyOne(name) {
    }
    OnlyOne.GetInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("This is a string");
        }
        else {
            return OnlyOne.instance;
        }
    };
    return OnlyOne;
}());
var obj = OnlyOne.GetInstance();
var obj1 = OnlyOne.GetInstance();
