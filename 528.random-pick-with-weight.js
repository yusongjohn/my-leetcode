var Solution = function (w) {
    pre = new Array(w.length).fill(0);
    pre[0] = w[0];
    for (let i = 1; i < w.length; ++i) {
        pre[i] = pre[i - 1] + w[i];
    }
    this.total = pre[w.length - 1];
};

Solution.prototype.pickIndex = function () {
    const binarySearch = (target) => {
        let low = 0, high = pre.length - 1;
        while (low < high) {
            const mid = Math.floor((high - low) / 2) + low;
            if (pre[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
    return binarySearch(Math.floor((Math.random() * this.total)) + 1);
};

const solution = new Solution([3, 1, 2, 4]);
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());