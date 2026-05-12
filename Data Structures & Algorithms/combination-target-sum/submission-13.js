class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a - b);
        let result = [];

        let backtrack = (target, memo, index) => {
            if (target === 0) {
                result.push([...memo]);
                return;
            } else if (target < 0) {
                return;
            }

            for (let i = index; i < nums.length; i++) {
                memo.push(nums[i]);

                backtrack(target - nums[i], memo, i);

                memo.pop();
            }
        };

        backtrack(target, [], 0);

        return result;
    }
}
