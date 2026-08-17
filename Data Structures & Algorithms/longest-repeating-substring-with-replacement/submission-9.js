class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;

        let i = 0;
        let count = {};

        let maxFreq = () => {
            let max = 0;
            for (let c of Object.values(count)) {
                max = Math.max(max, c);
            }
            return max;
        };

        for (let j = 0; j < s.length; j++) {
            count[s[j]] = (count[s[j]] || 0) + 1;

            let len = j - i + 1;

            if (len - maxFreq() > k) {
                count[s[i]]--;
                i++;
            }

            res = Math.max(j - i + 1, res);
        }

        return res;
    }
}
