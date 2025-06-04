"use strict";
class Pattern {
    pattern(nums) {
        if (nums.length < 3)
            return false;
        const stack = [];
        let third = -Infinity; // This represents nums[k]
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] < third) {
                return true;
            }
            while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
                third = stack.pop();
            }
            stack.push(nums[i]);
        }
        return false;
    }
}
let pattern = new Pattern();
let nums = [1, 2, 3, 4];
console.log(pattern.pattern(nums)); // Output false
