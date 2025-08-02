"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strs = ["flower", "flow", "flight"];
function longestCommonPrefix(str) {
    if (str.length === 0)
        return "";
    var prefix = "";
    var fitstWord = str[0];
    for (var i = 0; i <= fitstWord.length; i++) { // eita te ekta char dhorche 
        var char = fitstWord[0];
        for (var j = 0; j < str.length; j++) { // array er first index re dhroche 
            if (i >= str[j].length || str[j][i] !== char) {
                return prefix; //mismatch found 
            }
        }
        prefix += char; // charractrer matches in all strings 
    }
    return prefix;
}
// console.log(longestCommonPrefix(strs));
function isPalindrone(x) {
    var str = x.toString();
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrone(121));
console.log(isPalindrone(-121));
