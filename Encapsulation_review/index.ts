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

// console.log(user1.getUserName());

// console.log(user1.authenticate('rp1122'));

user1.changePassword("Shohan");
// here password has been changed 
// console.log(user1.authenticate('rp1122'));



const friends: string[] = [
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


function getFirstLeterOfArray(arr: string[]): void {
  for (let i = 0; i < arr.length; i += 1) {
    const firstLetter = arr[i][0];
    console.log(`First letter of ${arr[i]} is: ${firstLetter}`);

  }
}
getFirstLeterOfArray(friends)

function getLastLeterOfArray(arr: string[]): void {
  for (let i = 0; i < arr.length; i += 1) {
    const lastLetter = arr[i][arr[i].length - 1];
    console.log(`last letter of ${arr[i]} is: ${lastLetter}`);

  }
}
getLastLeterOfArray(friends);

const name: string = "Shohan";
console.log(name.length);




export {}

// writing this i can tell typescript that  this file is a module 