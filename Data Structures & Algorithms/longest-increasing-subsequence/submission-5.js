class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let memo = {};

        let dfs = (i) => {
            if (i > nums.length - 1) return 0;

            if (memo[i] !== undefined) return memo[i];

            let maxLen = 1;

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] < nums[j]) {
                    maxLen = Math.max(maxLen, 1 + dfs(j));
                }
            }

            memo[i] = maxLen;
            return memo[i];
        };

        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(max, dfs(i));
        }

        return max;
    }
}
