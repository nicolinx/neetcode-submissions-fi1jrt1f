class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let res = new Array(nums.length).fill(1);

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        console.log(res);

        let a = 1;

        for (let i = n - 2; i >= 0; i--) {
            a = a * nums[i + 1];
            res[i] = res[i] * a;
        }

        console.log(res);

        return res;
    }
}
