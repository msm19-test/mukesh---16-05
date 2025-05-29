function find(words: string[]): string[] {
    let wordSet = new Set(words);
    let x = new Map<string, boolean>();

    // Helper function to check if word can be formed by other words
    function check(word: string, isOriginalWord: boolean): boolean {
        if (x.has(word)) return x.get(word)!;

        for (let i = 1; i < word.length; i++) {
            const prefix = word.substring(0, i);
            const suffix = word.substring(i);

            if (wordSet.has(prefix)) {
                // If suffix is a word or can be formed by concatenation
                if (wordSet.has(suffix) || check(suffix, false)) {
                    x.set(word, true);
                    return true;
                }
            }
        }

    x.set(word, false);
        return false;
    }

    const result: string[] = [];

    for (const word of words) {
        if (word.length === 0) continue;

        // Temporarily remove current word to avoid using itself in formation
        wordSet.delete(word);

        if (check(word, true)) {
            result.push(word);
        }

        // Add it back after checking
        wordSet.add(word);
    }

    return result;
}


console.log(find([
    "cat","dog","catdog"
]));
// Output["catdog"]


