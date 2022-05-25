/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// BFS
var findOrder = function (numCourses, prerequisites) {
    // 收集邻接表
    const edges = Array.from({ length: numCourses }, () => []);
    const indeg = new Array(numCourses).fill(0); // 默认所有节点的入度为0

    // 收集入度
    for (let info of prerequisites) { // info[1] -> info[0] (from -> to)
        indeg[info[0]]++;
        edges[info[1]].push(info[0])
    }

    // 先从所有入度为0
    const queue = [];
    const result = []
    indeg.forEach((deg, index) => {
        if (deg === 0) {
            queue.push(index);
        }
    });

    while (queue.length) {
        const u = queue.pop();
        result.push(u);

        // 遍历节点u的邻接点
        for (let v of edges[u]) {
            if (--indeg[v] === 0) {
                queue.push(v);
            }
        }
    }

    if (result.length === numCourses) {
        return result
    }
    return [];
};