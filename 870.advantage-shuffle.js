var advantageCount = function (A, B) {
    let ord = Uint16Array.from({ length: B.length }, (_, i) => i);
    let ans = new Uint32Array(B.length);

    ord.sort((a, b) => B[b] - B[a]); // 记录B的排序索引
    A.sort((a, b) => b - a);

    let i = 0, j = B.length - 1;
    for (let ix of ord) {
        ans[ix] = A[i] > B[ix] ? A[i++] : A[j--];
    }

    return ans
};

console.log(advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2]))