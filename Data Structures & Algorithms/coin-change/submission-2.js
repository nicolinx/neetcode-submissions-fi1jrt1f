class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let memo = {};

        let count = (i, rest) => {
            let key = `${i},${rest}`;

            if (memo[key] !== undefined) return memo[key];

            if (rest === 0) return 0;

            if (rest < 0 || i >= coins.length) return Infinity;

            let take = 1 + count(i, rest - coins[i]);

            let skip = count(i + 1, rest);

            let min = Math.min(take, skip);
            memo[key] = min;

            return memo[key];
        };

        let result = count(0, amount);

        return result === Infinity ? -1 : result;
    }
}
