"use strict";
let number = 1;
number = 10;
console.log(number);
let level;
level = 1;
level = "1";
level = true;
level = {};
function render(document) {
    return document;
}
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number / 2));
let user = [1, "Steve"];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let go = Direction.Up;
console.log(go);
function calculateTax(income, taxYear = 2022) {
    console.log(`Calculating tax for ${taxYear}`);
    let tax = income * 0.4;
    return tax;
}
let tax = calculateTax(400000);
tax === null || tax === void 0 ? void 0 : tax.toString();
let employee = {
    id: 1,
    name: "Steve",
    printName: () => {
        console.log(employee.name);
    },
};
let employee2 = {
    id: 1,
    name: "Steve",
    printName: () => {
        console.log(employee.name);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "string")
        return parseInt(weight) * 2.2;
    else
        return weight * 2.2;
}
let uiWidget = {
    drag: () => {
        console.log("dragging");
    },
    drop: () => {
        console.log("dropping");
    },
    resize: () => {
        console.log("resizing");
    },
};
uiWidget.drag();
uiWidget.drop();
uiWidget.resize();
let q = 50;
let d = "Up";
let distance = "m";
function greet(name) {
    if (name)
        console.log(`Hello ${name}`);
}
greet(null);
greet(undefined);
greet("Steve");
