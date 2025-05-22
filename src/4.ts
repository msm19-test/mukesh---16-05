function compareVersions(v1: string, v2: string): number {
  // Split the versions into parts by '.'
  let arr1 = v1.split(".");
  let arr2 = v2.split(".");

  // Get the longest length
  let maxLen = Math.max(arr1.length, arr2.length);

  // Loop through each part
  for (let i = 0; i < maxLen; i++) {
    // Get numbers, default to 0 if missing
    let num1 = i < arr1.length ? parseInt(arr1[i]) : 0;
    let num2 = i < arr2.length ? parseInt(arr2[i]) : 0;

    // Compare current numbers
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
    // if equal, continue loop
  }

  // All parts are equal
  return 0;
}

// Some tests
console.log(compareVersions("1.0.1", "1"));        // → 1
console.log(compareVersions("1.0", "1.0.0"));      // → 0
console.log(compareVersions("2.1", "2.10"));       // → -1