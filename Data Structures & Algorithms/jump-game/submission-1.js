class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let memo = {};

        let dfs = (i) => {
            if (memo[i] !== undefined) return memo[i];

            if (i === nums.length - 1) {
                memo[i] = true;
                return memo[i];
            }
            if (i >= nums.length) {
                memo[i] = false;
                return memo[i];
            }

            let max = nums[i];

            for (let j = 1; j <= max; j++) {
                if (dfs(i + j) === true) {
                    memo[i] = true;
                    return memo[i];
                }
            }

            memo[i] = false;
            return memo[i];
        };

        return dfs(0);
    }
}
