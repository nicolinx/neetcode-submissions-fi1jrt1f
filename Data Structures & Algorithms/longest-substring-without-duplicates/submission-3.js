class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // zxyzxyz
        // abcabcbb

        let res = 0;
        let memo = new Set();

        let l = 0;
        let r = 0;

        while (r < s.length) {
            if (!memo.has(s[r])) {
                memo.add(s[r]);
                r++;

                if (memo.size > res) res = memo.size;
            } else {
                memo.delete(s[l]);
                l++;
            }

        }


        return res;
    }
}