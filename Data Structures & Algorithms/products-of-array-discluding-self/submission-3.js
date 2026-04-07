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

        for (let i = 1; i < nums.length; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let rightProduct = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] = res[i] * rightProduct;
            rightProduct *= nums[i];
        }

        return res;
    }
}
