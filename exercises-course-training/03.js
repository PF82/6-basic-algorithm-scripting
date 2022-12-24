// 3-Factorialize a Number
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less 
than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    //since the return values for the function will always be greater than or equal to 1, create var 
    //initialized at one
    let product = 1;
    //loop through the num; use compound assignment multiplication for var and i
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    //return var
    return product
}

console.log(factorialize(5))