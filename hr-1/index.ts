function plusMinus(arr: number[]): void {
  let pos = 0;
  let neg = 0;
  let zero = 0;


  const total = arr.length;

  for (let i = 0; i <= arr.length; i++) {
    const singleNumber = arr[i];
    if (singleNumber > 0) pos++;
    else if (singleNumber < 0) neg++;
    else zero++;
  }


  console.log((pos / total).toFixed(6));
  console.log((neg / total).toFixed(6));
  console.log((zero / total).toFixed(6));
  
}

const array = [-4, 3, -9, 0, 4, 1];
plusMinus(array);
