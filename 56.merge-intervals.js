/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0]); // 关键步骤
    // 反证法证明如下
    // https://leetcode.cn/problems/merge-intervals/solution/he-bing-qu-jian-by-leetcode-solution/

    // 实际上：把区间在坐标轴上画出来，可以很直观的知道需要按照左端点进行排序后然后再合并

    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastInterval = result[result.length - 1];
        if (currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
        } else {
            result.push(currentInterval)
        }
    }
    return result;
};