// 2-Reverse a String
/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
    //create var and assign it an empty string
    let reversed = '';
    //loop through the string and reverse it; and concatenate var with the current character
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    //return the final value of var
    return reversed;
}

console.log(reverseString("hello"))

