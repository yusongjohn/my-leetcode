/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length;
    if (len < 2) {
        return 0;
    }

    let res = 0;
    function dfs(currentIndex, profit, status) {

        if (currentIndex == len - 1) {
            res = Math.max(res, profit);
            return;
        }

        const nextIndex = currentIndex + 1;
        dfs(nextIndex, profit, status);

        if (status == 1) { // 状态改变
            dfs(nextIndex, profit + prices[nextIndex], 0);
        } else {
            dfs(nextIndex, profit - prices[nextIndex], 1);
        }
    }

    dfs(0, 0, 0); // 第0天 不持有
    dfs(0, -prices[0], 1) // 第0天 持有
    return res;
};