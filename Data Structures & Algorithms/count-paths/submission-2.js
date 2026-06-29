class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let memo = {};

        let dfs = (x, y) => {
            let key = `${x},${y}`;

            if(memo[key]!== undefined) return memo[key];

            let temp = 0;

            if (x === m - 1 && y === n - 1) {
                return 1;
            }

            if (x + 1 < m) temp += dfs(x + 1, y);
            if (y + 1 < n) temp += dfs(x, y + 1);

            memo[key] = temp;
            return temp;
        };

        return dfs(0, 0);
    }
}
