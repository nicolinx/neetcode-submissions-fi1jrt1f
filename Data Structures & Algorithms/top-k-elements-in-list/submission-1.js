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

        let a = Object.entries(map).sort((a, b)=>  b[1] - a[1]).slice(0,k).map((e) => e[0]);
        console.log(a);

        return a;
    }
}
