"use strict";
function GenericMethod(value) {
    return value;
}
console.log(GenericMethod(27));
console.log(GenericMethod("Hello"));
var numArray = [1, 2, 3, 4, 5];
numArray.push(6);
function PrintAll(args) {
    args.forEach(function (x) { return console.log(x); });
}
PrintAll(["A", "B", "C"]);
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var spObject = new SimpleMath();
spObject.baseValue = 2;
spObject.multiplyValue = 4;
console.log(spObject.calculate());
var SimpleMathMixed = (function () {
    function SimpleMathMixed() {
    }
    SimpleMathMixed.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMathMixed;
}());
var spObjectMixed = new SimpleMathMixed();
spObjectMixed.baseValue = 2;
spObjectMixed.multiplyValue = "4";
console.log(spObject.calculate());
var MyMap = (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.printMap = function () {
        for (var kp in this.map) {
            console.log(kp, this.map[kp]);
        }
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
