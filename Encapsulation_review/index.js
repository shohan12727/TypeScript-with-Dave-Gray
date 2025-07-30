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
console.log(user1.getUserName());
console.log(user1.authenticate('rp1122'));
user1.changePassword("Shohan");
// here password has been changed 
console.log(user1.authenticate('rp1122'));
