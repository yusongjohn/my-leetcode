/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// DFS
var isBipartite = function (graph) {
    const visited = []; // 可以优化，visited 和 color 合为一个，color默认值 uncolored 即可。
    const color = new Array(graph.length).fill(false); // color值为true,false
    let ret = true;

    function dfs(u) {
        if (!ret) return;

        visited[u] = true;
        for (let v of graph[u]) {
            if (visited[v]) { // 如果已经访问过，判断颜色是否和u相反
                if (color[u] === color[v]) { // 相邻节点颜色不能相同
                    ret = false;
                }
            } else { // 如果没有访问过，则进行染色
                color[v] = !color[u];
                dfs(v)
            }
        }
    }

    for (let i = 0; i < graph.length && ret; i++) {
        dfs(i);
    }

    return ret;
};