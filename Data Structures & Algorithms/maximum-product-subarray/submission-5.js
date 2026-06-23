class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let temp = nums[i];
            max = Math.max(temp, max);
            for (let j = i + 1; j < nums.length; j++) {
                temp *= nums[j];
                max = Math.max(temp, max);
            }
        }

        return max;
    }
}
