class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set();
        for (let num of nums) {
            set.add(num);
        }

        let longest = 0;
        for (let num of set) {
            if (!set.has(num - 1)) {
                let currentNum = num;
                let total = 1;
                while (set.has(currentNum + 1)) {
                    total++;
                    currentNum += 1;
                }

                longest = Math.max(longest, total);
            }
        }

        return longest;
    }
}
