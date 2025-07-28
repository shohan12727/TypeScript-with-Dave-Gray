"use strict";
/**
 * Encapsulation: Encapsulation means hiding the internal details of how something works and only showing what is necessary to the outside .
 */
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
