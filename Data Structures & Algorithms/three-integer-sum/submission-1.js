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
            let j = 0;
            let k = nums.length - 1;

            while (j < k) {
                let r = nums[j] + nums[k];

                if (r > nums[i]) {
                    j++;
                    break;
                } else {
                    k++;
                }

                if (r === -nums[i]) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    res.add(JSON.stringify(triplet));
                    break;
                }
            }
        }

        return Array.from(res).map(item => JSON.parse(item));
    }
}


// i + j + k = 0;
// -i = j + k;