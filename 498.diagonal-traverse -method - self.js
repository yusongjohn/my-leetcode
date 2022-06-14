/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const rowLength = mat.length;
    const coloumnLength = mat[0].length;

    const ret = [];
    let row = 0;
    let column = 0;
    let flag = true;
    while (row <= rowLength - 1 && column <= coloumnLength - 1) {
        if (flag) {
            while (row >= 0 && column < coloumnLength) {
                ret.push(mat[row][column]);
                row--;
                column++;
            }
            row++;
            column--;
            
            if (column === coloumnLength - 1) {
                row++;
            } else {
                column++;
            }
        } else {
            while (row < rowLength && column >= 0) {
                ret.push(mat[row][column]);
                row++;
                column--;
            }
            row--;
            column++;

            if (row === rowLength - 1) {
                column++;
            } else {
                row++;
            }
        }
        flag = !flag;
    }
    return ret;
};