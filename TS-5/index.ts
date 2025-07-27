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

console.log(bookBox.toString());
