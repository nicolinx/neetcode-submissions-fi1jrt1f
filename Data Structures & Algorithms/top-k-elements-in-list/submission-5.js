class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1);
        }

        let memo = Array(nums.length+1).fill(null).map((_)=>[]);
        for(let [k,v] of map.entries()){
            memo[v].push(k);
        }

        let res = [];
        for(let i = memo.length - 1; i>=0; i--){
            if(memo[i].length !== 0){
                res.push(...memo[i]);
            }

            if(res.length === k) return res;
        }

        return [];
    }
}
