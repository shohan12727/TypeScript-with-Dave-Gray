"use strict";
/**
 * Encapsulation: Encapsulation means hiding the internal details of how something works and only showing what is necessary to the outside .
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    // method to authenticate user
    User.prototype.authenticate = function (enterPassword) {
        return enterPassword === this.password;
    };
    //method to change password 
    User.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    return User;
}());
// create user 
var user1 = new User("Shohan", "rajesh1122");
// console.log(user1.authenticate("1234"));
// console.log(user1.authenticate("rajesh1122"));
user1.changePassword("shohan");
// console.log(user1.authenticate("rajesh1122"));
// console.log(user1.authenticate("shohan"));
function logMassage(message) {
    console.log(message);
}
// console.log(logMassage());
// so the void function can't return anything it can only executes any opertaion but can not return
var LibraryBook = /** @class */ (function () {
    function LibraryBook(title, author, isCheckedOut) {
        this.title = title;
        this.author = author;
        this.isCheckedOut = false; //initially available
    }
    LibraryBook.prototype.checkOut = function () {
        if (!this.isCheckedOut) {
            this.isCheckedOut = true;
            console.log("you have already check out \"".concat(this.title, "\" by ").concat(this.author));
            return true;
        }
        else {
            console.log("Sorry, \"".concat(this.title, "\" is already checked out"));
            return false;
        }
    };
    // method to return book 
    LibraryBook.prototype.returnBook = function () {
        if (this.isCheckedOut) {
            this.isCheckedOut = false;
            console.log("You have already returned \"".concat(this.title, "\", Thank you!"));
        }
        else {
            console.log("".concat(this.title, " was not checked out"));
        }
    };
    LibraryBook.prototype.getStatus = function () {
        return this.isCheckedOut ? "Checked out" : "Available";
    };
    return LibraryBook;
}());
var book = new LibraryBook("1991", "George Orwell", false);
console.log(book.getStatus());
book.checkOut();
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    // method to describe the shape
    Shape.prototype.describe = function () {
        console.log("This is a shpae at positon (".concat(this.x, ", ").concat(this.y, ")"));
    };
    return Shape;
}());
// derived class representing a circle
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        var _this = _super.call(this, x, y) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var shape1 = new Shape(10, 20);
shape1.describe();
var circle1 = new Circle(5, 10, 20);
console.log(circle1.area());
