/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    // 给每个节点定义三种状态：未搜索、搜索中、已完成
    const nodeStatus = { hasNotSearch: '', searching: 'searching', completed: 'completed' }

    let valid = true;
    const edges = Array.from({ length: numCourses }, () => []);
    const visited = new Array(numCourses).fill(nodeStatus.hasNotSearch);

    for (let info of prerequisites) {
        edges[info[1]].push(info[0]);
    }

    function dfs(u) {
        visited[u] = nodeStatus.searching;
        for (let v of edges[u]) {
            if (visited[v] == nodeStatus.hasNotSearch) {
                dfs(v);
                if (!valid) {
                    return;
                }
            } else if (visited[v] === nodeStatus.searching) {
                valid = false;
                return;
            }
        }
        visited[u] = nodeStatus.completed;
    }

    for (let i = 0; i < numCourses && valid; i++) {
        if (visited[i] === nodeStatus.hasNotSearch) {
            dfs(i);
        }
    }

    return valid;
};