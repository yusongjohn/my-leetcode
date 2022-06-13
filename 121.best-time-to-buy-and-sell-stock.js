/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let minPrice = prices[0];
    let maxProfitValue = 0;
    for (let i = 1; i < prices.length; i++) {
        maxProfitValue = Math.max(maxProfitValue, prices[i] - minPrice);
        minPrice = Math.min(prices[i], minPrice);
    }
    return maxProfitValue;
};