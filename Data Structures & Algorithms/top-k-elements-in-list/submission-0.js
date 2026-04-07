class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for(let num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        console.log(map);

        return [];
    }
}
