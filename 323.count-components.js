/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    // 初始化，每个节点的集合号是其自己
    const fa = new Array(n);
    for (let i = 0; i < n; i++) {
        fa[i] = i;
    }

    function find(x) {
        if (x === fa[x]) {
            return x;
        }
        return fa[x] = find(fa[x]); // 路径压缩
    }

    function union(a, b) {
        const _a = find(a), _b = find(b);
        // 集合号不同，则建立连接
        if (_a !== _b) {
            n--; // 初始各自隔离，没有连通，后面每连通一次就连通分量 - 1
            fa[_a] = _b
        }
    }

    // 根据 edges 建立 联通
    edges.forEach(edge => union(edge[0], edge[1]))

    // const set = new Set();
    // for (let i = 0; i < fa.length; i++) {
    //     set.add(find(i));
    // }
    // return set.size // 重新获取连通分量，实际获取所有的差异的集合号

    return n;
};
