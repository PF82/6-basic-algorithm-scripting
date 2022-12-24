// 9-Finders Keepers
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, 
return undefined.
*/

function findElement(arr, func) {
    let num = 0;
    //loop throught the array; and assign arr length to the var
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        //if the numbers in the array pass the function's test, return the num
        if (func(num)) {
            return num;
        }
    }
    //if none of the numbers in the arr pass the function's test, return undefined
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))