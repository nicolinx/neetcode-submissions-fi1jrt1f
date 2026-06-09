class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = Array(nums.length).fill(0);
        let max = 0;

        for(let n = 0;n<nums.length;n++){
            let rob1 = (memo[n-2] || 0) + nums[n];
            let rob2 = (memo[n-1] || 0)

            memo[n] = Math.max(rob1, rob2);

            max = Math.max(memo[n], max)
        }

        return max;
    }
}
