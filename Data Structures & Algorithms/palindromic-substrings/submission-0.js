class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        let getPalindrome = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            getPalindrome(i, i);
            getPalindrome(i, i + 1);
        }

        return count;
    }
}
