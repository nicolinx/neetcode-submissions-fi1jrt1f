class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a-b);
        console.log(nums);
        let result = [];

        let traverse = (target, memo, index) => {
            console.log(target, memo, index);
            // base
            if (target === 0) {
                // found match!
                result.push([...memo]);
                return;
            } else if (target < 0) {
                // failed
                return;
            }

            for (let i = index; i < nums.length; i++) {
                if (nums[i] > target) break;

                memo.push(nums[i]);
                traverse(target - nums[i], memo, i);

                // backtrack
                memo.pop();
            }
        };

        traverse(target, [], 0);

        return result;
    }
}
