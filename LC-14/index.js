"use strict";
//  strs = ["dog","racecar","car"]
Object.defineProperty(exports, "__esModule", { value: true });
var str = ["flower", "flow", "flight"];
function longestCommonPrefix(arr) {
    if (arr.length === 0)
        return "";
    for (var i = 0; i < arr[0].length; i++) {
        var curretChar = arr[0][i];
        console.log(curretChar);
    }
    return "";
}
console.log(longestCommonPrefix(str));
