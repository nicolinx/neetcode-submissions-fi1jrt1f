class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let dfs = (i) => {
            if (i === nums.length - 1) return true;
            if (i > nums.length) return false;

            let max = nums[i];

            for (let j = 1; j <= max; j++) {
                if(dfs(i + j) === true) return true;
            }

            return false;
        };

        return dfs(0);
    }
}
