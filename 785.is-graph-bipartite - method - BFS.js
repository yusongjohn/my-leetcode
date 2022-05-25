/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// DFS
var isBipartite = function (graph) {
    const color = new Array(graph.length).fill(-1); // color值为 -1(未染色), 0 ,1  
    let ret = true;

    function bfs(u) {
        if (color[u] === -1) {
            color[u] = 0;
        }
        const queue = [u];
        while (queue.length && ret) {
            const cur = queue.shift();

            const neighborColor = color[cur] ? 0 : 1;
            for (let v of graph[cur]) {
                if (color[v] === -1) {
                    color[v] = neighborColor;
                    queue.push(v);
                } else if (color[v] === color[cur]) {
                    ret = false;
                }
            }
        }

    }

    for (let i = 0; i < graph.length && ret; i++) {
        bfs(i);
    }

    return ret;
};