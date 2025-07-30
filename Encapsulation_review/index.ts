// Encapsulation means hiding the internal details of how something works and only showing what is necessary to outside 
class User {
  private userName: string;
  private password: string;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }

  // get user name 

  public getUserName(): string {
    return this.userName;
  }

  //method to authenticate user 
  authenticate(enterPassword: string): boolean {
    return enterPassword === this.password;
  }

  // method to change password 
  changePassword(newPassword: string): void {
    this.password = newPassword;
  }

}

const user1 = new User("Pal Sagar", "rp1122");

console.log(user1.getUserName());

console.log(user1.authenticate('rp1122'));

user1.changePassword("Shohan");
// here password has been changed 
console.log(user1.authenticate('rp1122'));
