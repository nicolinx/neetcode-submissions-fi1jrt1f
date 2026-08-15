class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;

        let res = 0;

        while (i < j) {
            let width = j - i;

            let water = Math.min(heights[i], heights[j]) * width;
            
            res = Math.max(res, water);

            if (heights[i] < heights[j]) i++;
            else j--;
        }

        return res;
    }
}
