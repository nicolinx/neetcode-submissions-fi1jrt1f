class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        let subRob = (subNums) => {
            let memo = {};
            let count = (i) => {
                if (subNums[i] === undefined) return 0;

                if (memo[i] !== undefined) return memo[i];

                let r = Math.max(subNums[i] + count(i + 2), count(i + 1));
                memo[i] = r;

                return r;
            };

            return count(0);
        };

        // 1st scenario - Include first house, skip last house
        let scenario1 = subRob(nums.slice(0, nums.length - 1));

        // 2nd scenario - Skip first house, include last house
        let scenario2 = subRob(nums.slice(1));

        return Math.max(scenario1, scenario2);
    }
}
