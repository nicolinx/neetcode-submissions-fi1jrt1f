class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // [1, 2, 4, 6]

        // [1, 1, 2, 8] -> from front
        // [48, 24, 6, 1] -> from back


        // [48, 24, 12, 8] -> result

        let res = Array(nums.length).fill(1);
        let res2 = Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            res2[i] = res2[i + 1] * nums[i + 1];
        }

        return res.map((e, i) => e * res2[i]);
    }
}
