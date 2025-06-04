class DuplicateNumber {
    remove(str: string): string {
        let result = "";
        const have: Set<string> = new Set();

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
const input: string = "abcaa";  // Replace this with any input string
const noduplicate = new DuplicateNumber();
const output: string = noduplicate.remove(input);
console.log(output);
