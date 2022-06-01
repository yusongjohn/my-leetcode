/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
    const memo = {};
    function dp(coins, amount) {
        if (amount === 0) {
            memo[amount] = 0
        };
        if (amount < 0) {
            memo[amount] = -1;
        };

        if (memo[amount] !== undefined) {
            return memo[amount];
        }

        let ret = Number.MAX_SAFE_INTEGER;
        for (let coin of coins) {
            const subRet = dp(coins, amount - coin);
            if (subRet === -1) continue;
            ret = Math.min(ret, 1 + subRet);
        }
        memo[amount] = ret === Number.MAX_SAFE_INTEGER ? -1 : ret;
        return memo[amount];
    }
    dp(coins, amount);
    return memo[amount];
};
