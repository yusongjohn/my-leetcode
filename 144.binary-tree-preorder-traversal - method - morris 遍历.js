function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let current = root;
    let mostRight = null; // 用来找前驱节点
    const ret = [];

    while (current != null) { // 经过 morris 的连接后，只有root的mostRight没有right指向
        mostRight = current.left; // 默认 left 是 current 的 前驱节点

        if (mostRight !== null) { // 如果存在left节点
            // 找到 mostRight
            while (mostRight.right != null && mostRight.right !== current) {
                mostRight = mostRight.right; // 第二次走到current的时候，可能指向current
            }

            // 上面while循环退出只看有下面两种情况
            if (mostRight.right === null) { // 第一次遍历到current
                ret.push(current);
                mostRight.right = current;
                current = current.left;
                continue;
            } else if (mostRight.right === current) { // 第二次遍历到current
                mostRight.right = null; // 恢复现状
            }
        } else { // 如果current只有右节点
            ret.push(current);
            current = current.right;
        }
    }
    return ret;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));

preorderTraversal(root);