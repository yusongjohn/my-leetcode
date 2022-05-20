var serialize = function (root) {
    if(root === null){
        return [];
    }
    const result = [];
    // 层次遍历
    let queue = [root];
    // result.push(root.val);
    while (queue.length) {
        const nextQueue = [];
        while (queue.length) {
            const currentNode = queue.shift();
            result.push(currentNode ? currentNode.val : '#');
            if (currentNode) {
                nextQueue.push(currentNode.left, currentNode.right)
            }
        }
        queue = nextQueue;
    }
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data.length) {
        return null;
    }
    const root = new TreeNode(data.shift())
    let queue = [root];
    while (data.length) {
        const nextQueue = [];
        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode === null) {
                continue;
            }
            if (data.length) {
                const leftVal = data.shift();
                const leftNode = (leftVal === '#' ? null : new TreeNode(leftVal));
                currentNode.left = leftNode
                nextQueue.push(leftNode);
            }

            if (data.length) {
                const rightVal = data.shift();
                const rightNode = (rightVal === '#' ? null : new TreeNode(rightVal));
                currentNode.right = rightNode
                nextQueue.push(rightNode);
            }
        }
        queue = nextQueue;
    }
    return root;
};