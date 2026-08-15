class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let obj = {};

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                if (-nums[i] === nums[j] + nums[k]) {
                    // console.log();
                    let key = `${nums[i]}, ${nums[j]}, ${nums[k]}`;
                    obj[key] = [nums[i], nums[j], nums[k]];
                    j++;
                    k--;
                } else if (-nums[i] > nums[j] + nums[k]) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return Object.values(obj);
    }
}
