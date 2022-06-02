/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const rows = text1.length + 1;
    const columns = text2.length + 1;
    const dp = [];

    // 初始化 base case
    dp[0] = new Array(columns).fill(0);
    for (let row = 1; row < rows; row++) {
        if (!dp[row]) {
            dp[row] = []
        }
        dp[row][0] = 0;
    }

    for (let row = 1; row < rows; row++) {
        for (let column = 1; column < columns; column++) {
            if (text1[row - 1] === text2[column - 1]) {
                dp[row][column] = dp[row - 1][column - 1] + 1;
            } else {
                dp[row][column] = Math.max(dp[row - 1][column], dp[row][column - 1]);
            }
        }
    }
    return dp[text1.length][text2.length]
};

// longestCommonSubsequence("abc", "def")