class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let count = (i, rest) => {
            if (rest === 0) return 0;

            if (rest < 0 || i >= coins.length) return Infinity;

            let take = 1 + count(i, rest - coins[i]);

            let skip = count(i + 1, rest);

            return Math.min(take, skip);
        };

        let result = count(0, amount);

        return result === Infinity ? -1 : result;
    }
}
