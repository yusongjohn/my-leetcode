const Prim = require('./data-structure/Prim');

function minimumCost(n, connections) {
    let graph = buildGraph(n, connections); // 转化成无向图邻接表的形式
    let prim = new Prim(graph); // 执行 Prim 算法
    
    if (!prim.allConnected()) {
        // 最小生成树无法覆盖所有节点
        return -1;
    }

    return prim.getWeightSum();
}

function buildGraph(n, connections) {
    // 图中共有 n 个节点
    let graph = Array.from({ length: n }, () => []);

    for (let conn of connections) {
        // 题目给的节点编号是从 1 开始的，
        // 但我们实现的 Prim 算法需要从 0 开始编号
        let u = conn[0] - 1;
        let v = conn[1] - 1;
        let weight = conn[2];
        // 「无向图」其实就是「双向图」
        // 一条边表示为 [from, to, weight]
        graph[u].push([u, v, weight]);
        graph[v].push([v, u, weight]);
    }
    return graph;
}