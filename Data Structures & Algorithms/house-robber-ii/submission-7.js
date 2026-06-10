class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0];

        let subRob = (subNums) => {
            let count = () => {
                let rob1 = 0; // -2
                let rob2 = 0; // -1

                for (let n of subNums) {
                    let temp = Math.max(rob1 + n, rob2);
                    rob1 = rob2;
                    rob2 = temp;
                }

                return rob2;
            };

            return count(subNums);
        };

        let scenario1 = nums.slice(0, nums.length - 1);
        let scenario2 = nums.slice(1);

        return Math.max(subRob(scenario1), subRob(scenario2));
    }
}
