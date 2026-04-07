class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // zxyzxyz
        // abcabcbb

        let res = 0;
        
        for (let i = 0; i < s.length; i++) {
            let j = i;
            let ts = "";

            let memo = new Set();

            while (j < s.length && !memo.has(s[j])) {
                memo.add(s[j]);

                ts += s[j];

                j++;
            }

            if(ts.length > res) res = ts.length;
        }

        return res;
    }
}
