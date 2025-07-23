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
