/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    const indegree = new Map();
    for (let f of flights) {
        const [from, to, price] = f;
        if (!indegree.get(to)) indegree.set(to, []);
        indegree.get(to).push([from, price]); // to 的入度
    }

    // 初始化备忘录，全部填一个特殊值
    memo = Array.from({ length: n }, () => (new Array(k + 1)).fill(-1))

    function dp(s, k) {
        // base case
        if (s == src) {
            return 0;
        }
        if (k == -1) {
            return -1;
        }

        // 查备忘录，防止冗余计算
        if (memo[s][k] != -1) {
            return memo[s][k];
        }

        // 初始化为最大值，方便等会取最小值
        let res = Number.MAX_SAFE_INTEGER;
        if (indegree.has(s)) {
            // 当 s 有入度节点时，分解为子问题
            for (let v of indegree.get(s)) {
                const [from, price] = v;
                // 从 src 到达相邻的入度节点所需的最短路径权重
                let subProblem = dp(from, k - 1);
                // 跳过无解的情况
                if (subProblem != -1) {
                    res = Math.min(res, subProblem + price);
                }
            }
        }
        // 如果还是初始值，说明此节点不可达
        memo[s][k] = res == Number.MAX_SAFE_INTEGER ? -1 : res;
        return memo[s][k];
    }

    return dp(dst, k);
};
// @lc code=end

// findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)