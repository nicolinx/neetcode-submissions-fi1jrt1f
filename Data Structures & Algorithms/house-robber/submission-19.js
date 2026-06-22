class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = {};

        let dfs = (i) => {
            if(memo[i] !== undefined) return memo[i];

            if (i >= nums.length) return 0;

            // take
            let take = nums[i] + dfs(i + 2);
            let skip = dfs(i + 1);

            memo[i] = Math.max(take, skip);
            return memo[i];
        };

        return dfs(0);
    }
}
