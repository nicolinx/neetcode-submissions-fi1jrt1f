class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let profit = 0;

        // 3 100 1 2

        for (let i = 0; i < prices.length; i++) {
            profit = Math.max(prices[i] - min, profit);

            if (prices[i] < min) min = prices[i];
        }

        return profit;
    }
}
