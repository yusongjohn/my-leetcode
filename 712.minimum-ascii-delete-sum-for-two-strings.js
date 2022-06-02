/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] + word1.charCodeAt(i - 1);
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] + word2.charCodeAt(j - 1);
    }

    for (let i = 1; i <= m; i++) {
        const c1 = word1[i - 1];
        for (let j = 1; j <= n; j++) {
            const c2 = word2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                const one = dp[i - 1][j] + word1.charCodeAt(i - 1)
                const two = dp[i][j - 1] + word2.charCodeAt(j - 1);
                dp[i][j] = Math.min(one, two);
            }
        }
    }
    return dp[m][n];
};