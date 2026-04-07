class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // remove duplicate
        nums = [... new Set(nums)];
        let map = new Set(nums);

        // if (nums.length === 0) return 0;

        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            let total = 1;
            let last = nums[i];

            let find = last + 1;

            while (find) {
                if (!map.has(find)) {
                    find = null;
                    break;
                }else{
                    total++;
                    find ++;
                }
            }

            if (total > max) max = total;
        }

        return max;
    }
}
