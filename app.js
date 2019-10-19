"use strict";
console.log("TS Works");
var myName = 'Anurag';
var myID = 1;
var myHobbies = false;
var myRealAge = 28;
var arrNumber = [1, 2, 3, 4, 5];
var arrStrings = ["A", "B", "C", "D", "Es"];
var myAddress = ["Kunal Icon", 6];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var enmColor = Color.Green;
var car = "BMW";
car = 1;
function ReturnName() {
    return myName;
}
function PrintName() {
    console.log(myName);
}
function multiply(num1, num2) {
    return num1 * num2;
}
var myFuncVar;
myFuncVar = multiply;
console.log(myFuncVar(1, 2));
var myObject = {
    name: "Anurag",
    age: 28
};
var myTSObject = {
    name: "Anurag",
    age: 28,
};
var complexObject = {
    data: [1, 2, 3, 4, 5],
    name: "Anurag",
};
var myRealAgeUpdate = 27;
myRealAgeUpdate = "27";
var finalValue = 38;
if (typeof finalValue == "number") {
    console.log("This is a number");
}
var myNotNullableNumber = 12;
var myNullableNumber = null;
var maxValue = 100;
var someString = "abc";
function PrintString() {
    var someString = "def";
    console.log(someString);
}
var someFuncVal = function (number1, number2) {
    return number1 + number2;
};
console.log(someFuncVal(1, 4));
var countDown = function (start) {
    if (start === void 0) { start = 20; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log(start);
};
countDown();
console.log("Spread Operator");
var numberArr = [1, 2, 3, 4, 5];
console.log(Math.max.apply(Math, numberArr));
console.log("Rest Operator");
var makeArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log(args);
};
makeArray(1, 2, 3, 4, 5);
console.log("Destructuring Arrays");
var StringArr = ["Anurag", "Asthana"];
var firstName = StringArr[0], surName = StringArr[1];
console.log(firstName, surName);
console.log("Destructuring objects");
var userData = { usrName: "Anu", age: 27 };
var usrName = userData.usrName, age = userData.age;
console.log(usrName, age);
console.log("Template Literals");
var userName = "Anurag";
var complexString = "This is a heading\nThis is a body\nThis is your name:" + userName;
console.log(complexString);
