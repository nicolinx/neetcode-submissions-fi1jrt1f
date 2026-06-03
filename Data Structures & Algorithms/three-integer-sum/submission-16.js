class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        console.log("Nums: ", nums);

        let set = new Set();

        for (let i = 0; i < nums.length; i++) {
            let j = i + 1;
            let k = nums.length - 1;
            let target = -nums[i];

            while (j < k) {
                // console.log(nums[i], nums[j], nums[k]);

                if (j === i) {
                    j++;
                    continue;
                }
                if (k === i) {
                    k--;
                    continue;
                }

                let sum = nums[j] + nums[k];

                // console.log("PASS, target: ", target, " SUM: ", sum);

                if (sum < target) j++;
                else if (sum > target) k--;
                else {
                    set.add(`${nums[i]},${nums[j]},${nums[k]}`);
                    j++;
                    k--;
                }
            }
        }

        // console.log(set);

        return Array.from(set, (str) => str.split(",").map(Number));
    }
}
