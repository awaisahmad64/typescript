"use strict";
exports.__esModule = true;
// Basic types
var isDone = true;
var height = 8;
var name = "Awais";
var list = [1, 2, 3, 4, 5];
//Emun
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
//any : useful for those variables that we have no idea about.
var notSure = 4;
notSure = "may be string";
notSure = false;
