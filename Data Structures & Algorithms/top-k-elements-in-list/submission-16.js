class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }

        let mem = Array.from({ length: nums.length }, () => []);
        for (let [a, b] of Object.entries(map)) {
            mem[b - 1].push(a);
        }

        let res = [];

        while(res.length!== k){
            let pop = mem.pop();
            res.push(...pop);
        }

        return res;
    }
}
