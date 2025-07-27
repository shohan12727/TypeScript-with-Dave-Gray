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
console.log(bookBox.toString());
