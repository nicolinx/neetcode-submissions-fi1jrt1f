class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let count = (x, memo = {1 : 1, 2 : 2}) => {
            if(memo[x] !== undefined) return memo[x];

            let res = count(x - 1, memo) + count(x - 2, memo)
            memo[x] = res;

            return res;
        };

        return count(n);
    }
}
