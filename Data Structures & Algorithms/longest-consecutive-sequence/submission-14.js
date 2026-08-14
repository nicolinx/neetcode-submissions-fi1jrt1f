class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;

        let set = new Set();

        for (let num of nums) {
            set.add(num);
        }

        for (let num of nums) {
            if (!set.has(num - 1)) {
                let count = 1;
                let curr = num;
                while (set.has(curr + 1)) {
                    count++;
                    curr++;
                }

                res = Math.max(res, count);
            }
        }

        return res;
    }
}
