class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        // [ -4, -1, -1, 0, 1, 2 ]

        let res = new Set();

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue;
                for (let k = 0; k < nums.length; k++) {
                    if (k === i || k === j) continue;

                    let total = nums[i] + nums[j] + nums[k];
                    if (total === 0) {
                        let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        res.add(JSON.stringify(triplet));
                    }
                }
            }
        }

        return Array.from(res).map(item => JSON.parse(item));
    }
}
