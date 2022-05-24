/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const edges = Array.from({ length: numCourses }, () => []);
    const indeg = new Array(numCourses).fill(0); // 默认所有节点的入度（或者说课程的依赖）为0

    for (let prerequisite of prerequisites) {
        // prerequisite[0] 依赖 prerequisite[1] 
        // [1] -> [0]
        edges[prerequisite[1]].push(prerequisite[0]);
        indeg[prerequisite[0]]++; // 记录入度
    }

    // 取出入度为0的节点 即先上没有任何依赖的课程，这些课程上完之后才能上其他课
    const queue = []
    indeg.forEach((deg, index) => {
        if (deg === 0) {
            queue.push(index);
        }
    }); // 先进先出

    console.log(queue, indeg)
    let visited = 0;
    while (queue.length) {
        visited++;
        let from = queue.shift();
        for (let to of edges[from]) { // from 上完后，to的依赖（入度减少）
            if (--indeg[to] === 0) { // 入度减少到为0的时候，可以开始上课了，push进队列中
                queue.push(to);
            }
        }
    }

    return visited === numCourses
};