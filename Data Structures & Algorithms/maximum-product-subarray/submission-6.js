class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let resMax = nums[0];
        let min = resMax;
        let max = resMax;

        for (let i = 1; i < nums.length; i++) {
            let curr = nums[i];
            let currXMin = nums[i] * min;
            let currXMax = nums[i] * max;

            min = Math.min(curr, currXMax, currXMin);
            max = Math.max(curr, currXMax, currXMin);

            resMax = Math.max(resMax, max);
        }

        return resMax;
    }
}
