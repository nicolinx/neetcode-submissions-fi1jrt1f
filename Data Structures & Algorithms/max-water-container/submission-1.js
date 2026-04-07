class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;

        let i = 0;
        let j = heights.length - 1;

        while(i < j){
            let l = j - i; // panjang
            let w = Math.min(heights[i], heights[j]); // lebar

            let volume = l * w;
            if(volume > res) res = volume;

            if(heights[i] < heights[j]){
                i++;
            }else{
                j--;
            }
        }

        return res;
    }
}
