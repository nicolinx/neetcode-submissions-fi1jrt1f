class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = nums[0];
        let max = nums[0]

        for(let i = 1; i< nums.length;i++){
            max = Math.max(nums[i], nums[i] + max)
            res = Math.max(res, max)
        }

        return res;
    }
}
