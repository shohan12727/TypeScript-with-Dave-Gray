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
console.log(user1.authenticate("1234"));
console.log(user1.authenticate("rajesh1122"));
user1.changePassword("shohan");
console.log(user1.authenticate("rajesh1122"));
console.log(user1.authenticate("shohan"));
