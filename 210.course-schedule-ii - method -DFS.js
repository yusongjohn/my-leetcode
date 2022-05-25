/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function (numCourses, prerequisites) {
    const nodeStatus = { hasNotSearch: '', searching: 'searching', completed: 'completed' }

    const edges = Array.from({ length: numCourses }, () => []);
    const visited = new Array(numCourses).fill(nodeStatus.hasNotSearch);
    let valid = true;

    for (let info of prerequisites) {
        edges[info[1]].push(info[0]);
    }
    const result = [];

    function dfs(u) {
        visited[u] = nodeStatus.searching;
        for (const v of edges[u]) {
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
        visited[u] = nodeStatus.completed; // 出度为0，则保存
        result.unshift(u); // 高级课程放在最后，如果是push，则在最后需要reverse
    }

    for (let i = 0; i < numCourses && valid; i++) {
        if (visited[i] === nodeStatus.hasNotSearch) {
            dfs(i);
        }
    }
    return valid ? result : []
};