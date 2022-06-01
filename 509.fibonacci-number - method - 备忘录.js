/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const memo = [0, 1];
    function helper(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (memo[n]) return memo[n];

        memo[n] = helper(n - 1) + helper(n - 2)
        return memo[n]
    }
    return helper(n);
};
