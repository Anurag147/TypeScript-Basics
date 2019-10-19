"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var circ = __importStar(require("./Math/Circle"));
var rec = __importStar(require("./Math/Rectangle"));
console.log(circ.PI);
console.log(circ.calculateCircumference(4));
console.log(rec.calculateRectangleArea(4, 2));
