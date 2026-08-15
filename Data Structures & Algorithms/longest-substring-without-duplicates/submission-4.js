class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();

        let i = 0;
        let j = 0;

        let res = 0;

        while (j < s.length) {
            if (!set.has(s[j])) {
                set.add(s[j]);
                j++;
                res = Math.max(res, j - i);
            } else {
                while (set.has(s[j])) {
                    set.delete(s[i]);
                    i++;
                }
            }
        }

        return res;
    }
}
