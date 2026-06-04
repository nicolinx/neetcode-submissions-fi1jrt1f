class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = { 1: 1, 2: 2 };
        let count = (x) => {
            if (memo[x] !== undefined) return memo[x];

            let res = count(x - 1) + count(x - 2);
            memo[x] = res;

            return res;
        };

        return count(n);
    }
}
