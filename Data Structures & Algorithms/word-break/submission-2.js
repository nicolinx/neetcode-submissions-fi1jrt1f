class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordSet = new Set();
        for (let word of wordDict) {
            wordSet.add(word);
        }

        let memo = {};

        let canBreak = (i) => {
            if (i === s.length) return true;

            if(memo[i] !== undefined) return memo[i];

            for (let x = i; x < s.length; x++) {
                let str = s.substring(i, x + 1);
                if (wordSet.has(str)) {
                    if (canBreak(x + 1) === true) return true;
                }
            }

            memo[i] = false;
            return false;
        };

        return canBreak(0);
    }
}
