/**
 * @param {number[][]} points
 * @return {number}
 */

const Prim = require('./data-structure/Prim');
var minCostConnectPoints = function (points) {
    let graph = buildGraph(points.length, points);
    return (new Prim(graph)).getWeightSum();
};

function buildGraph(n, connections) {
    let graph = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let xi = connections[i][0], yi = connections[i][1];
            let xj = connections[j][0], yj = connections[j][1];
            let weight = Math.abs(xi - xj) + Math.abs(yi - yj);
            // 无向图，邻接表互相保存
            graph[i].push([i, j, weight]); // 第 i 个节点的邻接表
            graph[j].push([j, i, weight]); // 第 j 个节点的邻接表
        }
    }

    return graph;
}

console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]])); // 18