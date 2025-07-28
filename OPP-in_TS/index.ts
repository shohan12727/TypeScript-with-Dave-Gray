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

// console.log(user1.authenticate("1234"));
// console.log(user1.authenticate("rajesh1122"));

user1.changePassword("shohan");
// console.log(user1.authenticate("rajesh1122"));
// console.log(user1.authenticate("shohan"));








function logMassage(message: string): void {
  console.log(message);
}

// console.log(logMassage());


// so the void function can't return anything it can only executes any opertaion but can not return






class LibraryBook {
  private title: string;
  private author: string;
  private isCheckedOut: boolean;


  constructor(title: string, author: string, isCheckedOut: boolean) {
    this.title = title;
    this.author = author;
    this.isCheckedOut = false; //initially available
  }

  checkOut(): boolean {
    if (!this.isCheckedOut) {
      this.isCheckedOut = true;
      console.log(`you have already check out "${this.title}" by ${this.author}`);
      return true;
    } else {
      console.log(`Sorry, "${this.title}" is already checked out`);
      return false;
    }
  }


  // method to return book 
  returnBook():void {
    if (this.isCheckedOut){
      this.isCheckedOut = false;
      console.log(`You have already returned "${this.title}", Thank you!`);
    } else {
      console.log(`${this.title} was not checked out`);
    }
  }

  getStatus(): string {
    return this.isCheckedOut ? "Checked out" : "Available"
  }
}

const book = new LibraryBook("1991", "George Orwell", false);


console.log(book.getStatus());

book.checkOut();













































export { }