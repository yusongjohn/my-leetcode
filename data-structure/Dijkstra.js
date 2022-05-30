
const INF = Number.MAX_SAFE_INTEGER;

function Dijkstra(graph, u) {
    const dist = [];
    const p = [];
    for (let i = 1; i < graph.length; i++) {
        dist[i] = graph[u][i];
        flag[i] = false;

        if (dist[i] == INF) {
            p[i] = -1
        } else {
            p[i] = u;
        }
    }

    dist[u] = 0;
    flag[u] = true;

    for (let i = 1; i < n; i++) {
        // 找最小
        let temp = INF, t = u;
        for (let j = 1; j <= n; j++) {
            if (!flag[j] && dist[j] < temp) {
                t = j;
                temp = dist[j]
            }
        }

        if (t == u) return;

        flag[t] = true;

        // 松弛
        for (let j = 1; j <= n; j++) {
            if (!flag[j] && dist[j] > dist[t] + graph[t][j]) {
                dist[j] = dist[t] + graph[t][j];
                p[j] = t;
            }
        }
    }
}