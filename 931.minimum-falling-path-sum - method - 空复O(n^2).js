/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    const dp = [matrix[0]];
    const rows = matrix.length;
    const columns = matrix[0].length;
    for (let row = 1; row < rows; row++) {
        dp[row] = [];
        for (let column = 0; column < columns; column++) {
            const candidates = [dp[row - 1][column]]
            if (column !== 0) {
                candidates.push(dp[row - 1][column - 1])
            }
            if (column !== columns - 1) {
                candidates.push(dp[row - 1][column + 1]);
            }
            dp[row][column] = Math.min(...candidates) + matrix[row][column];
        }
    }
    return Math.min(...dp[rows - 1])
};