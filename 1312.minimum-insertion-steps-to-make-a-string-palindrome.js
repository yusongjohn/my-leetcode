// 两个版本的区别在于 循环的顺序：保证咋计算 dp[i][j] 时 dp[i + 1][j], dp[i][j - 1], dp[i + 1][j - 1] 

// version 1
var minInsertions = function (s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 0;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
            }
        }
    }
    return dp[0][n - 1];
};
// version 2
var minInsertions = function (s) {
    let n = s.size();
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let span = 2; span <= n; ++span) {
        for (let i = 0; i <= n - span; ++i) {
            let j = i + span - 1;
            dp[i][j] = min(dp[i + 1][j], dp[i][j - 1]) + 1;
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            }
        }
    }
    return dp[0][n - 1];
}