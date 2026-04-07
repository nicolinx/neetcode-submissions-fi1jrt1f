class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            let mid = Math.floor((r - l) / 2) + l;
            if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
                l = mid + 1;
                console.log(mid, l);
            } else {
                return nums[mid];
            }
        }

        return nums[0];
    }
}
