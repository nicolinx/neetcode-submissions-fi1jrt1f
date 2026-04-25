class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        for (let [num, freq] of map) {
            bucket[freq].push(num);
        }

        let res = [];
        let p = bucket.length - 1;
        while (res.length < k && p > 0) {
            if (bucket[p].length > 0) {
                res.push(...bucket[p]);
            }

            p--;
        }

        return res;
    }
}
