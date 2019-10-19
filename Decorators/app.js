"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logged(constructorFn) {
    console.log(constructorFn);
}
var PersonDec = (function () {
    function PersonDec() {
        console.log("Constructor");
    }
    PersonDec = __decorate([
        Logged
    ], PersonDec);
    return PersonDec;
}());
function Logging(value) {
    return value ? Logged : null;
}
var CarDec = (function () {
    function CarDec() {
    }
    CarDec = __decorate([
        Logging(true)
    ], CarDec);
    return CarDec;
}());
function Printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var PlantDec = (function () {
    function PlantDec() {
        this.name = "Green Plant";
    }
    PlantDec = __decorate([
        Printable
    ], PlantDec);
    return PlantDec;
}());
var plantDecObj = new PlantDec();
plantDecObj.print();
var ProjectDec = (function () {
    function ProjectDec(name) {
        this.projectName = name;
    }
    ProjectDec.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        Editable(false)
    ], ProjectDec.prototype, "calcBudget", null);
    return ProjectDec;
}());
var projectDecObj = new ProjectDec("COM");
projectDecObj.calcBudget();
projectDecObj.calcBudget();
function Editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var CourseDec = (function () {
    function CourseDec(name) {
        this.name = name;
    }
    CourseDec.prototype.printStudentNumbers = function (mode, printaAll) {
        if (printaAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, PrintInfo)
    ], CourseDec.prototype, "printStudentNumbers", null);
    return CourseDec;
}());
var courseDecObj = new CourseDec("Super Course");
courseDecObj.printStudentNumbers("abc", true);
courseDecObj.printStudentNumbers("def", false);
function PrintInfo(target, methodName, paramIndex) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}
