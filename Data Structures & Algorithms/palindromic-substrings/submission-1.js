class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        let count = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            count(i, i);
            count(i, i + 1);
        }

        return res;
    }
}
