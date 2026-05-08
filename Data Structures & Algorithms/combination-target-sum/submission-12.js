class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];

        let backtrack = (target, memo, index) => {
            // cek if found!
            if (target === 0) {
                result.push([...memo]);
                return;
            } else if (target < 0) {
                // mission failed! (Pruning)
                return;
            }

            // loop until nums.length
            for (let i = index; i < nums.length; i++) {
                // add to memo (explore)
                memo.push(nums[i]);

                // backtrack with new memo and new target
                backtrack(target - nums[i], memo, i);

                // rollback
                memo.pop();
            }

            console.log(target, memo, index);
        };

        backtrack(target, [], 0);

        return result;
    }
}
