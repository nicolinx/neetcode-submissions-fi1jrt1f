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
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    res.add(JSON.stringify(triplet));
                    j++;
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return Array.from(res).map(item => JSON.parse(item));
    }
}


// i + j + k = 0;
// -i = j + k;