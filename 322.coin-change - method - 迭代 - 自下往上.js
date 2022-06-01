/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
    let dp = (new Array(amount + 1)).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
        for (let coin of coins) {
            if (currentAmount - coin < 0) {
                continue;
            }
            dp[currentAmount] = Math.min(dp[currentAmount], 1 + dp[currentAmount - coin]); // 实际场景，得考虑溢出问题  1 + Number.MAX_SAFE_INTEGER
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
};

// coinChange([1, 2, 5], 100)
