/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // 3 cases: Sell, Buy, Do nothing
    let hold = Array(prices.length);
    let free = Array(prices.length);

    // Buying stock on first day
    hold[0] = -prices[0];
    free[0] = 0;

    for (let i = 1; i < prices.length; i++) {
        // Case when buying: free[i-1] - prices[i]
        // Case when doing nothing: hold[i-1]
        hold[i] = Math.max(free[i - 1] - prices[i], hold[i - 1]);

        // Case when selling: hold[i-1] + prices[i] - fee
        // Case when doing nothing: free[i-1]
        free[i] = Math.max(hold[i - 1] + prices[i] - fee, free[i - 1]);
    }
    return free[prices.length - 1];
};
