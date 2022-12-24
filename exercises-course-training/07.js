// 7-Repeat a String Repeat a String
/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not 
a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    //create a var to store the repeated word
    let newStr = '';
    //use for loop to repeat code as many times as needed according to num; and add the string to the var
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    //return the var for the repeated word
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3))