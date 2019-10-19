"use strict";
var My_Math;
(function (My_Math) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(radius) {
            return 2 * PI * radius;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = My_Math.Circle || (My_Math.Circle = {}));
})(My_Math || (My_Math = {}));
