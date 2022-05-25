/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    const graph = buildGraph(n, dislikes);
    return isBipartite(graph);
};

// DFS leetcode 785
var isBipartite = function isBipartite(graph) {
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

function buildGraph(n, dislikes) {
    const graph = Array.from({ length: n }, () => []);

    dislikes.forEach(dislikeInfo => {
        const personA = dislikeInfo[0] - 1; // 注意disline 中的数字从1开始的哦
        const personB = dislikeInfo[1] - 1;
        // 无向图啊
        graph[personA].push(personB)
        graph[personB].push(personA)
    })
    return graph;
}