/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// labuladong 思想
var canFinish = function (numCourses, prerequisites) {
    const visited = []; // 贪吃蛇，蛇走过的路
    const onPath = []; // 贪吃蛇 蛇的身体
    let hasCycle = false;

    const graph = buildGraph(numCourses, prerequisites);

    for (let index = 0; index < numCourses; index++) {
        if (hasCycle) {
            break
        }
        tranverse(index); // 需要判断每个节点作为头结点是否会引起环˝
    }

    // 从某个节点开始，是否产生环
    function tranverse(index) {
        if (onPath[index]) {
            hasCycle = true;
        }

        // 如果该节点已经访问过则不再访问？
        if (visited[index] || hasCycle) {
            return;
        }

        visited[index] = true;
        onPath[index] = true;
        for (let childIndex of graph[index]) {
            tranverse(childIndex);
        }
        onPath[index] = false;
    }

    return hasCycle;
};

// 邻接表
function buildGraph(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => [])

    for (let prerequisite of prerequisites) {
        graph[prerequisite[1]].push(prerequisite[0]);
    }

    return graph;
}

canFinish(2, [[1, 0], [0, 1]])