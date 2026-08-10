class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let res = n;

        for (let i = 0; i < n; i++) {
            res = res ^ i ^ nums[i];
        }

        return res;
    }
}
