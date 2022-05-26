/**
 * @param {number[][]} points
 * @return {number}
 */

const UnionFind = require('./data-structure/UnionFind');

var minCostConnectPoints = function (points) {
    let n = points.length;
    // 生成所有边及权重
    const edges = buildGraph(points);
    // 将边按照权重从小到大排序
    edges.sort((a, b) => a[2] - b[2]);
    // 执行 Kruskal 算法
    let mst = 0;
    let uf = new UnionFind(n);
    for (let edge of edges) {
        let u = edge[0];
        let v = edge[1];
        let weight = edge[2];
        // 若这条边会产生环，则不能加入 mst
        if (uf.connected(u, v)) {
            continue;
        }
        // 若这条边不会产生环，则属于最小生成树
        mst += weight;
        uf.union(u, v);
    }
    return mst;
};

function buildGraph(points) {
    const edges = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let xi = points[i][0], yi = points[i][1];
            let xj = points[j][0], yj = points[j][1];
            // 用坐标点在 points 中的索引表示坐标点
            edges.push([i, j, Math.abs(xi - xj) + Math.abs(yi - yj)]);
        }
    }
    return edges;
}

console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]])); // 18