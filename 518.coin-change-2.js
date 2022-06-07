/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const dp = Array.from({ length: coins.length + 1 }, () => new Array(amount + 1).fill(0))
    // base case
    for (let i = 0; i <= coins.length; i++) dp[i][0] = 1;
    for (let j = 0; j <= amount; j++) dp[0][j] = 0;

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (coins[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[coins.length][amount];
};