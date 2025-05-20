"use strict";
class DuplicateNumber {
    remove(str) {
        let result = "";
        const have = new Set();
        for (const x of str) {
            if (!have.has(x)) {
                have.add(x);
                result += x;
            }
        }
        return result.split('').sort().join('');
    }
}
// Example usage
const input = "abcaa"; // Replace this with any input string
const noduplicate = new DuplicateNumber();
const output = noduplicate.remove(input);
console.log(output);
