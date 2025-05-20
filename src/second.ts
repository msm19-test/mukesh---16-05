class VersionComparator {
    version1: string;
    version2: string;

    constructor(version1: string, version2: string) {
        this.version1 = version1;
        this.version2 = version2;
    }

    compare(): number {
        const v1: string[] = this.version1.split('.');
        const v2: string[] = this.version2.split('.');
        const maxLen = Math.max(v1.length, v2.length);

        for (let i = 0; i < maxLen; i++) {
            const num1 = i < v1.length ? parseInt(v1[i], 10) : 0;
            const num2 = i < v2.length ? parseInt(v2[i], 10) : 0;

            if (num1 < num2) return -1;
            if (num1 > num2) return 1;
        }

        return 0; // Equal versions
    }
}

// Example usage:
const comparator = new VersionComparator("1.2", "1.10.01");
console.log("Result =", comparator.compare()); // Output: -1
