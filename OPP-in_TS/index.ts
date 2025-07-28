/**
 * Encapsulation: Encapsulation means hiding the internal details of how something works and only showing what is necessary to the outside .
 */

class User {
  private userName: string;
  private password: string;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }
  // method to authenticate user
  authenticate(enterPassword: string): boolean {
    return enterPassword === this.password;
  }
  //method to change password 
  changePassword(newPassword: string): void {
    this.password = newPassword
  }
}
// create user 
const user1 = new User("Shohan", "rajesh1122");

console.log(user1.authenticate("1234"));
console.log(user1.authenticate("rajesh1122"));

user1.changePassword("shohan");
console.log(user1.authenticate("rajesh1122"));
console.log(user1.authenticate("shohan"));






















































export { }