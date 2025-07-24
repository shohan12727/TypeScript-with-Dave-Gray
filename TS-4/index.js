"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstName = 'Shohan';
console.log(firstName);
var json = JSON.parse('1255');
console.log(json);
console.log(typeof json);
var number = JSON.stringify(125589);
console.log(number);
console.log(typeof number);
var name = [];
name.push("Ashraful");
console.log(name);
var companies = [];
companies.push("Apple,Google");
console.log(companies);
var isPhone = true;
console.log(isPhone);
var myTuple;
myTuple = [89, false, 'movie'];
console.log(myTuple);
var tuple = ['New Model', 1992, true];
console.log(tuple);
tuple.push('This is new added data');
console.log(tuple);
var graph = [22, 99];
console.log(graph);
var car = {
    type: "Toyota",
    model: "corola",
    year: 2007
};
console.log(car);
var uni = {
    name: 'nsu'
};
console.log(uni.name);
uni.name = 'ku';
console.log(uni.name);
var cardinalDirection;
(function (cardinalDirection) {
    cardinalDirection[cardinalDirection["north"] = 1] = "north";
    cardinalDirection[cardinalDirection["south"] = 2] = "south";
    cardinalDirection[cardinalDirection["east"] = 3] = "east";
    cardinalDirection[cardinalDirection["west"] = 4] = "west";
})(cardinalDirection || (cardinalDirection = {}));
console.log(cardinalDirection.north);
console.log(cardinalDirection.east);
var statusCode;
(function (statusCode) {
    statusCode[statusCode["notFound"] = 404] = "notFound";
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["accepted"] = 202] = "accepted";
    statusCode[statusCode["badrequest"] = 400] = "badrequest";
})(statusCode || (statusCode = {}));
console.log(statusCode.notFound);
console.log(statusCode.badrequest);
console.log(statusCode.accepted);
console.log(statusCode.success);
var ractangle = {
    height: 56,
    width: 105
};
console.log("The width of the ractangle is:", ractangle.width);
console.log("The height of the ractangle is:", ractangle.height);
function printStatusCode(code) {
    console.log("my status code is ".concat(code));
}
printStatusCode('404');
printStatusCode(404);
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
var start = getTime();
for (var i = 0; i < 1000000; i++) {
    Math.sqrt(i); // some expensive operation
}
var end = getTime();
console.log("Time taken: ".concat(end - start, " ms"));
function printHello() {
    console.log("Hello!");
}
printHello();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(22, 2));
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(5, 2));
var x = 'Hello';
console.log(x.length);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = 'Shohan';
console.log(person);
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2('Shawon');
console.log(person2);
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var myCar = new Car("Toyota");
console.log(myCar.brand);
var User = /** @class */ (function () {
    function User(name, email, status) {
        this.name = name;
        this.email = email;
        this.status = status;
    }
    return User;
}());
var user1 = new User("Rajesh", "rajesh@gmail.com", true);
console.log(user1);
console.log(user1.name);
console.log(user1.email);
console.log(user1.status);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return 3.1416 * this.radius * this.radius;
    };
    Circle.prototype.getCircumference = function () {
        return 2 * 3.1416 * this.radius;
    };
    return Circle;
}());
var myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.getArea());
console.log(myCircle.getCircumference());
