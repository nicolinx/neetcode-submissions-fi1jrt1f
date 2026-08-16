class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};

        let max = 0;
        let i = 0,
            j = 0;

        let res = 0;

        while (j < s.length) {
            map[s[j]] = (map[s[j]] || 0) + 1;
            max = Math.max(max, map[s[j]]);

            let windowLen = j - i + 1;
            if (windowLen - max > k) {
                map[s[i]]--;
                i++;
            }

            res = Math.max(res, j - i + 1);
            j++;
        }
        return res;
    }
}
