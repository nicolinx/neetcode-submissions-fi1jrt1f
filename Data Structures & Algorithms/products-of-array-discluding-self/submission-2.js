class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // BRUTE WAY
        const res = Array(nums.length).fill(1);

        for (let i = 0; i< nums.length;i++){
            for(let j = 0; j< nums.length; j++){
                if(j=== i) continue;
                res[i] *= nums[j];
            }
        }

        return res;
    }
}
