function plusMinus(arr) {
    var pos = 0;
    var neg = 0;
    var zero = 0;
    var total = arr.length;
    for (var i = 0; i <= arr.length; i++) {
        var singleNumber = arr[i];
        if (singleNumber > 0)
            pos++;
        else if (singleNumber < 0)
            neg++;
        else
            zero++;
    }
    console.log((pos / total).toFixed(6));
    console.log((neg / total).toFixed(6));
    console.log((zero / total).toFixed(6));
}
var array = [-4, 3, -9, 0, 4, 1];
plusMinus(array);
