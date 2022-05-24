/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// version 2
var allPathsSourceTarget = function (graph) {
    const lastIndex = graph.length - 1;
    const ret = [];
    const onPath = [];

    function tranverse(index) {
        if (index === lastIndex) {
            ret.push([...onPath]);
        }

        for (let childIndex of graph[index]) {
            onPath.push(childIndex);
            tranverse(childIndex)
            onPath.pop();
        }

    }
    onPath.push(0);
    tranverse(0);
    return ret;
};

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

// version 1
 var allPathsSourceTarget = function (graph) {
    const lastIndex = graph.length - 1;
    const ret = [];
    const onPath = [];

    function tranverse(index) {
        onPath.push(index);
        if (index === lastIndex) {
            ret.push([...onPath]);
            return onPath.pop(); // 不能忘掉
        }

        for (let childIndex of graph[index]) {
            tranverse(childIndex)
        }
        onPath.pop();
    }

    tranverse(0);
    return ret;
};

// allPathsSourceTarget([[1, 2], [3], [3], []])

// allPathsSourceTarget([[1, 2], [3], [3], []])