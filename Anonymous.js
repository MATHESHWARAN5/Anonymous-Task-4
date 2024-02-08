// 1.Print odd numbers in an array:

// Anonymous Function
let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5, 6]);

// IIFE
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6]);


// 2.Convert all the strings to title caps in a string array:

// Anonymous Function
let titleCaseStrings = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(titleCaseStrings(["hello", "world"]));

// IIFE
let titleCaseStrings = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world"]);
console.log(titleCaseStrings);

// 3.Sum of all numbers in an array:

// Anonymous Function
let sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};
console.log(sumArray([1, 2, 3, 4]));

// IIFE
let sumArray = (function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
})([1, 2, 3, 4]);
console.log(sumArray);

// 4.Return all the prime numbers in an array:

// Anonymous Function
let findPrimes = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};
console.log(findPrimes([1, 2, 3, 4, 5, 6]));

// IIFE
let findPrimes = (function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
})([1, 2, 3, 4, 5, 6]);
console.log(findPrimes);


// 5.Return all the palindromes in an array:

// Anonymous Function
let findPalindromes = function(arr) {
    return arr.filter(function(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
};
console.log(findPalindromes(["level", "hello", "noon"]));

// IIFE
let findPalindromes = (function(arr) {
    return arr.filter(function(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
})(["level", "hello", "noon"]);
console.log(findPalindromes);


// 6.Return median of two sorted arrays of the same size:

// Anonymous Function
let findMedian = function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    return length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
};
console.log(findMedian([1, 3, 5], [2, 4, 6]));

// IIFE
let findMedian = (function(arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    return length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
})([1, 3, 5], [2, 4, 6]);
console.log(findMedian);


// 7.Remove duplicates from an array:

// Anonymous Function
let removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// IIFE
let removeDuplicates = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})([1, 2, 2, 3, 4, 4, 5]);
console.log(removeDuplicates);


// 8.Rotate an array by k times:

// Anonymous Function
let rotateArray = function(arr, k) {
    k = k % arr.length;
    const rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
let rotateArray = (function(arr, k) {
    k = k % arr.length;
    const rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
})([1, 2, 3, 4, 5], 2);
console.log(rotateArray);
