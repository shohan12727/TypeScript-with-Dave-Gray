const strs = ["flower", "flow", "flight"];

function longestCommonPrefix(str: string[]): string {
  if (str.length === 0) return "";


  let prefix = "";

  const fitstWord = str[0];

  for (let i = 0; i <= fitstWord.length; i++) {       // eita te ekta char dhorche 
    const char = fitstWord[0];

    for (let j = 0; j < str.length; j++) {   // array er first index re dhroche 
      if (i >= str[j].length || str[j][i] !== char) {
        return prefix //mismatch found 
      }
    }
    prefix += char; // charractrer matches in all strings 

  }

  return prefix;
}
// console.log(longestCommonPrefix(strs));




function isPalindrone (x: number): boolean {
  const str = x.toString();

  for(let i = 0; i < Math.floor(str.length / 2); i++) {
    if(str[i] !== str[str.length -1 -i]){
      return  false ;
    }

  }
  return true;
}

console.log(isPalindrone(121));
console.log(isPalindrone(-121));


  













export { }