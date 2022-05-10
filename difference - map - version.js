// 差分數組
// leetcode: 題目： 370. 区间加法✨、1109. 航班预订统计、1094. 拼车, 2251: 花花
function Difference(changes = []) {
    this.diffMap = {};
    changes.forEach(([start, end]) => this.increment(start, end));
}

Difference.prototype.increment = function (startIndex, endIndex) {
    if (!this.diffMap[startIndex]) {
        this.diffMap[startIndex] = 0;
    }

    if (!this.diffMap[endIndex + 1]) {
        this.diffMap[endIndex + 1] = 0;
    }

    this.diffMap[startIndex] += 1;
    this.diffMap[endIndex + 1] -= 1;
}

Difference.prototype.generate = function (targets = []) {
    const sortHelper = (a, b) => a - b;
    const diffMapKeys = Object.getOwnPropertyNames(this.diffMap).map(key => +key).sort(sortHelper);

    // target 可能是乱序的，但是生成结果时，需要按序遍历进行累加和
    // 将一个长度为length的伪数组（其中的元素未定义）=> [0, 1, 2, 3, ....]
    const ids = Array.from({ length: targets.length }, (_, index) => index);
    // 替targets排序，排序的结果通过索引的心事保存在 ids 中
    ids.sort((a, b) => targets[a] - targets[b]);

    let i = 0, sum = 0;
    let answers = [];
    for (let id of ids) {
        while (i < diffMapKeys.length && diffMapKeys[i] <= targets[id]) {
            let currentDiffIndex = diffMapKeys[i++];
            let currentDiffVal = this.diffMap[currentDiffIndex];
            sum += currentDiffVal;
        }
        answers[id] = sum;
    }

    return answers;
}