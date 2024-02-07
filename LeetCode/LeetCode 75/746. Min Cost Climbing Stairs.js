/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i < cost.length + 1; i++) { // 마지막 층 도착도 하나의 step이라 1 추가
        let oneStep = dp[i - 1] + cost[i - 1];
        let twoStep = dp[i - 2] + cost[i - 2];
        dp[i] = Math.min(oneStep, twoStep);
    }
    return dp[cost.length];
};
