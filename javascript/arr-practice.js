// Write a function printReverse() that takes an array as an argument and prints out the elements of the array
// in reverse order but does not reverse the array itself.

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//Write a function isUniform() which takes an array as an argument and returns true if all elements in array are identical.

function isUniform(arr) {
    let first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

//Write a function sumArray() which takes an array of numbers and returns the sum of all numbers in array. 

function sumArray(arr) {
    let total = 0;
    arr.forEach(function (num) {
        total += num 
    });
    return total;
}

//Write a function max() that accepts an array of numbers and returns the maximum number in the array.

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


