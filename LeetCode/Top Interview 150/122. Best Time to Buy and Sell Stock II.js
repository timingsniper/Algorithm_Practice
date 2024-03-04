/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // buy, hold, sell
    let dp = Array(prices.length); //profit
    dp[0] = 0;
    for (let i = 1; i < prices.length; i++) {
        dp[i] = dp[i - 1] + Math.max(prices[i] - prices[i - 1], 0);
    }
    return dp[prices.length - 1];
};
