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
  returnBook(): void {
    if (this.isCheckedOut) {
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



class Shape {
  x: number;
  y: number;


  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // method to describe the shape
  describe(): void {
    console.log(`This is a shpae at positon (${this.x}, ${this.y})`);
  }
}

// derived class representing a circle

class Circle extends Shape {
  radius: number;

  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}


const shape1 = new Shape(10, 20);
shape1.describe();

const circle1 = new Circle(5, 10, 20)
console.log(circle1.area());



//--------------------------------------


// Polymorphism 


class Device {
  turnOn(): void {
    console.log("Device is turning on..........");
  }
}

class TV extends Device {
  turnOn(): void {
    console.log("Tv is turning one ..............");
  }
}

class AC extends Device {
  turnOn(): void {
    console.log("AC is turing on...............");
  }
}

class projector extends Device {
  turnOn(): void {
    console.log("projector is turing on......");
  }
}
const devices: Device[] = [new TV(), new AC(), new projector()];

devices.forEach(device => device.turnOn())





//Abstraction means focusing on what an object does in strad of how it does (like: driving a car without knowing engine mechinics)


class Car {
  private brand: string;
  private model: string;
  private speed: number;
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }
  public accelerate(): void {
    this.speed += 10;
  }
  public brake(): void {
    this.speed += 10;
  }
  public getSpeed(): number {
    return this.speed;
  }
}
const myCar: Car = new Car("Toyota", "Camry");
myCar.accelerate();

console.log("Current speed", myCar.getSpeed());



// function longestCommonPrefix(strs: string[]): string {
//   if (strs.length === 0) return "";

//   Loop through each character of the first string
//   for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i];

//     Compare this character with the same position in the other strings
//     for (let j = 1; j < strs.length; j++) {
//       If mismatch found or string is shorter, return the prefix so far
//       if (i >= strs[j].length || strs[j][i] !== char) {
//         return strs[0].substring(0, i);
//       }
//     }
//   }

//   If loop completes, the entire first string is the common prefix
//   return strs[0];
// }




// problem : const words = ["apple", "banana", "grape"];
//  Write a TypeScript function that logs the first character of each string in the array.

// what i will learn 
// The first [] accesses the string in the array.
// The second [] accesses the character in that string.

const fruits = ["apple", "banana", "grape"];

function firstLogCharactars(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    const firstChar = arr[i][0];
    console.log(`first charactars of ${arr[i]} is: ${firstChar}`);
  }
}
// firstLogCharactars(fruits);





const people = ["Shohan", "Rajesh", "Simanto", "Rudro", "Shafiq", "Sajib", "Mujahid"];

function getFirstLetter(arr: string[]): void {

  for (let i = 0; i < arr.length; i++) {

    const firstLetter = arr[i][0];

    console.log(`First charater of ${arr[i]} is: ${firstLetter}`);
  }
}
// getFirstLetter(people);



const cities = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur"];


function loopCity(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    const singleCity = arr[i];
    console.log(singleCity);
  }
}
// loopCity(cities)



function findLastWord(arr: string[]): void {
  for(let i = 0; i < arr.length; i++){
    const lastWord = arr[i][arr[i].length -1];
    console.log(lastWord);
    
  }
}
findLastWord(cities);










export { }