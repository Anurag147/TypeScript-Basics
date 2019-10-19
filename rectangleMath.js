"use strict";
var My_Math;
(function (My_Math) {
    function calculateRectangleArea(width, height) {
        return width * height;
    }
    My_Math.calculateRectangleArea = calculateRectangleArea;
})(My_Math || (My_Math = {}));
