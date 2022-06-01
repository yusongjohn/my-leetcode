/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let before = 1, beforeBefore = 0;
    for (let i = 2; i <= n; i++) {
        const tmp = beforeBefore + before;
        beforeBefore = before;
        before = tmp;
    }
    return before;
};
