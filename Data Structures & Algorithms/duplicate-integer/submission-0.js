class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();

        for(let item of nums){
            if(set.has(item)) return true;

            set.add(item);
        }

        return false;
    }
}
