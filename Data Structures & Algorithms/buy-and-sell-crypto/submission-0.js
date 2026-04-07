class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // [10,1,5,6,7,1]

        // [10,1,5,6,7,1,5]


        let min = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < min) {
                min = prices[i];
            } else {
                let profit = prices[i] - min;
                if (profit > maxProfit) maxProfit = profit;
            }
        }

        return maxProfit;
    }
}
