class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            let total = 1;
            let last = nums[i];

            let j = 0;
            while (j < nums.length) {
                console.log('find', last + 1, j, nums[j])

                if (nums[j] === last + 1) {
                    console.log('found', j, last + 1)
                    total++;
                    last = nums[j];
                    j = 0;

                } else {
                    j++;
                }
            }

            if (total > max) max = total;
        }

        return max;
    }
}
