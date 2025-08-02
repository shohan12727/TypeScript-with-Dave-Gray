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
console.log(longestCommonPrefix(strs));
