let firstName: string = 'Shohan';

console.log(firstName);


const json = JSON.parse('1255');
console.log(json);
console.log(typeof json);





const number = JSON.stringify(125589);
console.log(number);
console.log(typeof number);




const name: string[] = [];
name.push("Ashraful")
console.log(name);


const companies: string[] = [];
companies.push("Apple,Google");
console.log(companies);



const isPhone: boolean = true;
console.log(isPhone);



let myTuple: [number, boolean, string];

myTuple = [89, false, 'movie'];

console.log(myTuple);





let tuple: [string, number, boolean] = ['New Model', 1992, true];

console.log(tuple);

tuple.push('This is new added data');

console.log(tuple);




const graph: [x: number, y: number] = [22, 99];
console.log(graph);





const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "corola",
  year: 2007
}

console.log(car);



const uni = {
  name: 'nsu'
}
console.log(uni.name);

uni.name = 'ku';
console.log(uni.name);




enum cardinalDirection {
  north = 1,
  south,
  east,
  west
}
console.log(cardinalDirection.north);
console.log(cardinalDirection.east);


enum statusCode {
  notFound = 404,
  success = 200,
  accepted = 202,
  badrequest = 400
}
console.log(statusCode.notFound);
console.log(statusCode.badrequest);
console.log(statusCode.accepted);
console.log(statusCode.success);






// interface is like a blueprint or contact or similar like that 


interface Ractangle {
  height: number,
  width: number
}

const ractangle: Ractangle = {
  height: 56,
  width: 105
}
console.log("The width of the ractangle is:",ractangle.width);
console.log("The height of the ractangle is:",ractangle.height);








function printStatusCode (code: string | number){
  console.log(`my status code is ${code}`);
}

printStatusCode('404')
printStatusCode(404)



function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

const start = getTime();
for (let i = 0; i < 1_000_000; i++) {
  Math.sqrt(i); // some expensive operation
}
const end = getTime();
console.log(`Time taken: ${end - start} ms`);





function printHello(): void {
  console.log("Hello!"); 
}

printHello();





function multiply (a: number, b: number):number {
  return a*b;
}

console.log(multiply(22, 2));









function pow(value: number, exponent: number = 10){
  return value ** exponent;
}

console.log(pow(5,2));




let x: unknown = 'Hello';
console.log((x as string).length);





class Person {
  name: string;
}

const person = new Person();
person.name = 'Shohan';
console.log(person);










export { }