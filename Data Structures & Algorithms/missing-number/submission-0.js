class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length + 1;

        let sum = 0;
        for (let i = 0; i < n; i++) {
            console.log(i);
            sum += i;
        }

        for (let i = 0; i < nums.length; i++) {
            sum -= nums[i];
        }

        return sum;
    }
}
