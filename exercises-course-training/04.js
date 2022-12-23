// 4-Find the Longest Word in a String
/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    //take the string and split it into an array of words.
    const words = str.split(' ');
    //declare a var to keep track of the maximum length
    let maxLen = 0;
    //loop from 0 to the length of the array of words; and check for the longest word by comparing the current 
    //word to the previous one and storing the new longest word
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLen) {
            maxLen = words[i].length;
        }
    }
    //return the number value of the 2nd var
    return maxLen;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))