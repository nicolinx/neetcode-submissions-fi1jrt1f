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

        // console.log(map);

        let mem = Array.from({ length: nums.length }, () => []);
        // console.log(mem);
        for (let [a, b] of Object.entries(map)) {
            // console.log(a, b);
            mem[b - 1].push(a);
        }

        // console.log("mem final: ", mem);

        let res = [];

        let i = mem.length - 1;
        while(res.length!== k){
            let pop = mem.pop();
            res.push(...pop);
        }

        // while (k > 0 && mem.length !== 0) {
        //     let curr = mem.pop();
        //     if (curr.length !== 0) {
        //         res.push(...curr);
        //         k--;
        //     }
        // }

        return res;
    }
}
