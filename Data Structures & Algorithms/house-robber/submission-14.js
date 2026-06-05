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

            console.log("Process i: ", i);

            let r = Math.max(nums[i] + count(i + 2), count(i + 1));
            memo[i] = r;

            return r;
        };

        return count(0);
    }
}
