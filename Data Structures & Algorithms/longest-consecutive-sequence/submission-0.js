class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // [2,20,4,10,3,4,5]
        
        let max = 0;

        for(let i=0; i<nums.length; i++){
            let last = nums[i];
            let arr = [last];

            for(let j=1; j<nums.length;j++){
                if(nums[j] === last+1){
                    arr.push(nums[j]);
                    last = nums[j];
                }
            }

            if(arr.length > max) max = arr.length;
        }

        return max;

    }
}
