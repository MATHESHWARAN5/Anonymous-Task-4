// 1.Print odd numbers in an array:

let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5, 6]);

// 2.Convert all the strings to title caps in a string array:

let titleCaseStrings = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
console.log(titleCaseStrings(["hello", "world"]));

// 3.Sum of all numbers in an array:

let sumArray = arr => arr.reduce((acc, num) => acc + num, 0);
console.log(sumArray([1, 2, 3, 4]));


// 4.Return all the prime numbers in an array:

let findPrimes = arr => arr.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
});
console.log(findPrimes([1, 2, 3, 4, 5, 6]));


// 5.Return all the palindromes in an array:

let findPalindromes = arr => arr.filter(str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
});
console.log(findPalindromes(["level", "hello", "noon"]));



