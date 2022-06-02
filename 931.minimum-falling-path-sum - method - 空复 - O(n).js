/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let lastRow = matrix[0];
    let currentRow = [];
    const rows = matrix.length;
    const columns = matrix[0].length;
    for (let row = 1; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            const candidates = [lastRow[column]]
            if (column !== 0) {
                candidates.push(lastRow[column - 1])
            }
            if (column !== columns - 1) {
                candidates.push(lastRow[column + 1]);
            }
            currentRow[column] = Math.min(...candidates) + matrix[row][column];
        }
        const tmp = lastRow;
        lastRow = currentRow;
        currentRow = tmp;
    }
    return Math.min(...lastRow)
};