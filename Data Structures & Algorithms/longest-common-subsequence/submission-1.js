class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let memo = {};

        let dfs = (i, j) => {
            if (i === text1.length || j === text2.length) return 0;

            let key = `${i},${j}`;
            if (memo[key] !== undefined) return memo[key];

            if (text1[i] === text2[j]) {
                memo[key] = 1 + dfs(i + 1, j + 1);
                return memo[key];
            }

            memo[key] = Math.max(dfs(i, j + 1), dfs(i + 1, j));
            return memo[key];
        };

        return dfs(0, 0);
    }
}
