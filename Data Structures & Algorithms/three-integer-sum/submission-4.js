class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        // [ -4, -1, -1, 0, 1, 2 ]

        let res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;

            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k];

                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[k]]);

                    // skip duplicate
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;

                    j++;
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        return res;
    }
}


// i + j + k = 0;
// -i = j + k;