/* Pair and sum of array */

/* Given a pair-sum array and size of the original array (n), construct the original array.
A pair-sum array for an array is the array that contains sum of all pairs in ordered form.

For example pair-sum array for arr[] = {6, 8, 3, 4} is {14, 9, 10, 11, 12, 7}.
In general, pair-sum array for arr[0..n-1] is 
{arr[0]+arr[1], arr[0]+arr[2], ……., arr[1]+arr[2], arr[1]+arr[3], ……., arr[2]+arr[3], arr[2]+arr[4], …., arr[n-2]+arr[n-1}.
“Given a pair-sum array, construct the original array.” */

function constructOriginalArray(pair, n) {

    let arr = [];
    arr[0] = Math.floor((pair[0] + pair[1] - pair[n - 1]) / 2);

    for (let i = 1; i < n; i++) {
        arr[i] = pair[i - 1] - arr[0];
    }
    
    return arr;
}

let pair = [15, 13, 11, 10, 12, 10, 9, 8, 7, 5];

console.log(constructOriginalArray(pair, 5));