class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = {};

        let count = (i) => {
            if (nums[i] === undefined) return 0;

            if (memo[i] !== undefined) return memo[i];

            memo[i + 2] = count(i + 2);
            memo[i + 1] = count(i + 1);

            let r = Math.max(nums[i] + memo[i + 2], memo[i + 1]);
            return r;
        };

        return count(0);
    }
}
