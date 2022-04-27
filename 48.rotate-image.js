/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function (matrix) {
    // ------------------- 推导 start -------------------
    // col 列 => col 行；row 行 => [n - 1 - row] 列 
    // const temp = matrix[col][n - 1 - row];
    // matrix[col][n - 1 - row] = matrix[row][col]; // num1 -> num2

    // matrix[n - 1 - row][ n - 1 - col] = matrix[col][n - 1 - row] // num2 -> num3

    // matrix[n - 1 - col][ n - 1 - (n - 1 - row)] = matrix[n - 1 - row][ n - 1 - col]
    // => 
    // matrix[n - 1 - col][row] = matrix[n - 1 - row][ n - 1 - col] // num3 -> num4

    // matrix[row][ n - 1 - (n - 1 - col)] = matrix[n - 1 - col][row]
    // =>
    // matrix[row][col] = matrix[n - 1 - col][row] // num4 -> num1

    // 共四个数
    // num1: matrix[row][col]、
    // num2: matrix[col][n - 1 - row]、
    // num3: matrix[n - 1 - row][ n - 1 - col]、
    // num4: matrix[n - 1 - col][row]


    // const temp = num4;
    // num4 = num3;
    // num3 = num2;
    // num2 = num1;
    // num1 = temp
    // ------------------- 推导 end  ---------------------
    const matrixDimension = matrix.length;
    for (let row = 0; row < Math.floor(matrixDimension / 2); row++) {
        for (let col = 0; col < Math.floor((matrixDimension + 1) / 2); col++) {
            const temp = matrix[matrixDimension - 1 - col][row];
            matrix[matrixDimension - 1 - col][row] = matrix[matrixDimension - 1 - row][matrixDimension - 1 - col];
            matrix[matrixDimension - 1 - row][matrixDimension - 1 - col] = matrix[col][matrixDimension - 1 - row];
            matrix[col][matrixDimension - 1 - row] = matrix[row][col];
            matrix[row][col] = temp;
        }
    }

};