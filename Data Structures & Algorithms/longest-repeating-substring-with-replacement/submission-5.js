class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // XYYX
        // AAABABB k=1

        let res = 0;
        let memo = {};
        let l = 0;
        let maxFreq = 0;

        for (let r = 0; r < s.length; r++) {
            memo[s[r]] = (memo[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, memo[s[r]]);
            
            // r - l + 1 = panjang
            while((r - l + 1) - maxFreq > k){
                memo[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
