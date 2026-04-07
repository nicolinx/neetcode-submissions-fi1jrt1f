class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set();

        let i = 0;
        while (i < nums.length) {
            if (set.size >= k) {
                set.delete(nums[i - k - 1])
            }

            if (set.has(nums[i])) {
                return true;
            } else {
                set.add(nums[i])
                i++;
            }
        }

        return false;
    }
}
