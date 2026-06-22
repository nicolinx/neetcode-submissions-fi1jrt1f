class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        let subRob = (subNums) => {
            let memo = {};
            let dfs = (i) => {
                if (memo[i] !== undefined) return memo[i];

                if (i >= subNums.length) return 0;

                let take = subNums[i] + dfs(i + 2);
                let skip = dfs(i + 1);
                memo[i] = Math.max(take, skip);

                return memo[i];
            };

            return dfs(0);
        };

        // remove first
        let removeFirst = nums.slice(1, nums.length);

        // remove last
        let removeLast = nums.slice(0, nums.length - 1);

        return Math.max(subRob(removeFirst), subRob(removeLast));
    }
}
