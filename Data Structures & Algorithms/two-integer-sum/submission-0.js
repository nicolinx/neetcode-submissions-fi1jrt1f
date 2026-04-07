class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for(let i = 0; i<nums.length; i++){
            let num = nums[i];
            let find = target - num;

            console.log(find, map);
            if(map[find] !== undefined) return [i, map[find]];

            map[num] = i;
        }
        

        return [];
    }
}
