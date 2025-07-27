var NameValue = /** @class */ (function () {
    function NameValue(name) {
        this.name = name;
    }
    NameValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NameValue.prototype.getValue = function () {
        return this._value;
    };
    NameValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NameValue;
}());
var bookBox = new NameValue("Books");
bookBox.setValue("Harry potter");
var Harry = {
    name: "Harry potter",
    age: 32
};
var Ronaldo = {
    name: "Cristiano Ronaldo",
    age: 39,
    club: "Al Nasser",
    isGOAT: true
};
var messi = {
    name: "Leo Messi",
    age: 37,
    club: "Pink Miami",
    isGOAT: false
};
console.log(messi);
console.log(Ronaldo);
var Patient = /** @class */ (function () {
    function Patient(id, name, age, disease) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.disease = disease;
    }
    Patient.prototype.getDetails = function () {
        return "Details of the patient: ".concat(this.name, ", ").concat(this.age, ", ").concat(this.disease);
    };
    return Patient;
}());
var patient1 = new Patient(1, "Rajesh", 20, "Cold");
console.log(patient1);
var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this._balance = initialBalance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (ammount) {
            if (ammount > 0) {
                console.log("Balance can't be negative");
                return;
            }
            this._balance = ammount;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.displayInfo = function () {
        console.log("".concat(this.accountHolder, "'s balance: ").concat(this._balance));
    };
    return BankAccount;
}());
var acc1 = new BankAccount("Shohan", 1000);
console.log(acc1);
console.log(acc1.balance);
acc1.balance = -82585;
console.log(acc1.balance);
