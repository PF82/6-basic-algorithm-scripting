// 1-Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertToF(30);

console.log(convertToF(30))

// 2-Reverse a String
function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

reverseString("hello");

console.log(reverseString("hello"))

// 3-Factorialize a Number
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

factorialize(5);

console.log(factorialize(5))

// 4-Find the Longest Word in a String
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// 5-Return Largest Numbers in Arrays
function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }
    return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// 6-Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

console.log(confirmEnding("Bastian", "n"))

// 7-Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }
    return accumulatedStr;
}

repeatStringNumTimes("abc", 3);

console.log(repeatStringNumTimes("abc", 3))

// 8-Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// 9-Finders Keepers
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// 10-Boo who
function booWho(bool) {
    return typeof bool === "boolean";
}

booWho(null);

console.log(booWho(null))

// 11-Title Case a Sentence
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");

console.log(titleCase("I'm a little tea pot"))

// 12-Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// 13-Falsy Bouncer
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}

bouncer([7, "ate", "", false, 9]);


console.log(bouncer([7, "ate", "", false, 9]))

// 14-Where do I Belong
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
            return i;
    }
    return arr.length;
}

getIndexToIns([40, 60], 50);

console.log(getIndexToIns([40, 60], 50))

// 15-Mutations
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);

console.log(mutation(["hello", "hey"]))

// 16-Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))