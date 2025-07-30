"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Encapsulation means hiding the internal details of how something works and only showing what is necessary to outside 
var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    // get user name 
    User.prototype.getUserName = function () {
        return this.userName;
    };
    //method to authenticate user 
    User.prototype.authenticate = function (enterPassword) {
        return enterPassword === this.password;
    };
    // method to change password 
    User.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    return User;
}());
var user1 = new User("Pal Sagar", "rp1122");
// console.log(user1.getUserName());
// console.log(user1.authenticate('rp1122'));
user1.changePassword("Shohan");
// here password has been changed 
// console.log(user1.authenticate('rp1122'));
var friends = [
    "Ayaan",
    "Nira",
    "Farhan",
    "Sadia",
    "Rifat",
    "Mahi",
    "Tamim",
    "Lamia",
    "Rakib",
    "Tanha",
    "Sajid",
    "Oni",
    "Partho",
    "Jui",
    "Badhon",
    "Reem",
    "Rasel",
    "Shaila",
    "Noman",
    "Elita"
];
function getFirstLeterOfArray(arr) {
    for (var i = 0; i < arr.length; i += 1) {
        var firstLetter = arr[i][0];
        console.log("First letter of ".concat(arr[i], " is: ").concat(firstLetter));
    }
}
getFirstLeterOfArray(friends);
function getLastLeterOfArray(arr) {
    for (var i = 0; i < arr.length; i += 1) {
        var lastLetter = arr[i][arr[i].length - 1];
        console.log("last letter of ".concat(arr[i], " is: ").concat(lastLetter));
    }
}
getLastLeterOfArray(friends);
var name = "Shohan";
console.log(name.length);
// writing this i can tell typescript that  this file is a module 
