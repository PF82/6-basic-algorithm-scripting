// 5-Return Largest Numbers in Arrays
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    //create a var to store the results as an array
    const results = [];
    //create an outer loop to iterate through the outer array; and create a second var to hold the largest 
    //number and initialise it with the first number of each arr. This must be outside an inner loop so it 
    //won’t be reassigned until we find a larger number
    for (let i = 0; i < arr.length; i++) {
        let largestNr = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNr) {
                largestNr = arr[i][j];
            }
        }
        results[i] = largestNr
    }
    //create an inner loop to work with the sub-arrays; and check if the element of the sub array is larger 
    //than the currently stored largest number. If so, then update the number in the variable with the
    //assignment operator 

    //assign var and [i] to 2nd var  

    //return 1st var
    return results;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

