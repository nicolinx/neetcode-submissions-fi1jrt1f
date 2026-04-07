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
        let r = 0;

        while (r < s.length) {
            memo[s[r]] = (memo[s[r]] || 0) + 1;
            let bos = Math.max(...Object.values(memo));

            let panjang = r - l + 1
            let harusGanti = panjang - bos;

            if (harusGanti <= k) {
                r++;
                res = Math.max(res, panjang);
            } else {
                memo[s[l]]--;
                l++;
            }

        }

        return res;
    }
}
