//  strs = ["dog","racecar","car"]

const str = ["flower","flow","flight"];

function longestCommonPrefix (arr: string[]): string {
  if (arr.length === 0) return "";
  
  for(let i = 0; i < arr[0].length; i++){
    const curretChar = arr[0][i];
    console.log(curretChar);
  }
  return "";
}

console.log(longestCommonPrefix(str));

























export {}