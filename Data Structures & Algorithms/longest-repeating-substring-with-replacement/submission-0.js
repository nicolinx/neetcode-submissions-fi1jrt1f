class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // XYYX
        // AAABABB

        for (let i = 0; i < s.length; i++) {
            let memo = {};
            let bos = 0;

            for (let j = i; j < s.length; j++) {
                memo[s[j]] = (memo[s[j]] || 0) + 1;
                if(memo[s[j]] > bos) bos = memo[s[j]];
            }

            console.log(memo, bos);
        }
    }
}
