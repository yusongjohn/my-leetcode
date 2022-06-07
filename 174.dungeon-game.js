/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    const rows = dungeon.length;
    const columns = dungeon[0].length;
    // 最少需要多少滴血
    const dp = Array.from({ length: rows }, () => (new Array(columns)).fill(0))

    dp[rows - 1][columns - 1] = dungeon[rows - 1][columns - 1] >= 1 ? 1 : 1 - dungeon[rows - 1][columns - 1]; // 最少需要

    // base case
    for (let i = rows - 2; i >= 0; i--) {
        const tmp = dp[i + 1][columns - 1] - dungeon[i][columns - 1]
        dp[i][columns - 1] = tmp <= 0 ? 1 : tmp;
    }

    for (let j = columns - 2; j >= 0; j--) {
        const tmp = dp[rows - 1][j + 1] - dungeon[rows - 1][j]
        dp[rows - 1][j] = tmp <= 0 ? 1 : tmp;
    }

    for (let i = rows - 2; i >= 0; i--) {
        for (let j = columns - 2; j >= 0; j--) {
            const tmp = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]
            dp[i][j] = tmp <= 0 ? 1 : tmp;
        }
    }

    return dp[0][0]
};