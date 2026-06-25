class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordSet = new Set();
        for (let str of wordDict) {
            wordSet.add(str);
        }

        let memo = {};

        let count = (i) => {
            if (memo[i] !== undefined) return memo[i];

            if (i === s.length) return true;

            for (let x = i; x < s.length; x++) {
                let str = s.substring(i, x + 1);
                if (wordSet.has(str)) {
                    if (count(x + 1) === true) return true;
                }
            }

            memo[i] = false;
            return false;
        };

        return count(0);
    }
}
