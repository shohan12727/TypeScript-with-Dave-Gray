class NameValue<T> {
  private _value: T | undefined;
  
  constructor (private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }
  private getValue(): T | undefined {
    return this._value; 
  }
  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let bookBox = new NameValue<string>("Books");
bookBox.setValue("Harry potter");

// console.log(bookBox.toString());

// ----------------------------------------------



interface Person {
  name: string,
  age: number
}

const Harry: Person = {
  name: "Harry potter",
  age: 32
}
// console.log(Harry);


interface FootballPlayer {
  name: string,
  age: number,
  club: string, 
  isGOAT: boolean
}
const Ronaldo: FootballPlayer = {
  name: "Cristiano Ronaldo",
  age: 39,
  club: "Al Nasser",
  isGOAT: true
}

const messi: FootballPlayer = {
  name: "Leo Messi",
  age: 37,
  club: "Pink Miami",
  isGOAT: false
}
console.log(messi);
console.log(Ronaldo);


type Car = {
   brand: string,
   year: number,
   isElectric: boolean
}

type carKey = keyof Car;


class Patient {
  id: number;
  name: string;
  age: number;
  disease: string

  constructor(id: number, name: string, age: number, disease: string){
    this.id = id;
    this.name = name;
    this.age = age;
    this.disease = disease;
  }

  getDetails () {
    return `Details of the patient: ${this.name}, ${this.age}, ${this.disease}`
  }
}

const patient1 = new Patient(1,"Rajesh",20,"Cold");
console.log(patient1);



class BankAccount {
  public accountHolder: string;
  private _balance: number;
 

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this._balance = initialBalance;
  }
 
  public get balance(): number{
    return this._balance;
  }

  public set balance(ammount: number): number {
    if(ammount > 0){
      console.log("Balance can't be negative");
      return;
    }
    this._balance = ammount
  }

  public displayInfo(): void {
    console.log(`${this.accountHolder}'s balance: ${this._balance}`);
  }
}

const acc1 = new BankAccount ("Shohan",1000);

console.log(acc1);

console.log(acc1.balance);

acc1.balance = -82585;
console.log(acc1.balance);


