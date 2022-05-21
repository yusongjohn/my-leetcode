/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let current = root;
    let mostRight = null;
    const ret = [];
    while (current !== null) {
        mostRight = current.left;

        if (mostRight) { // 存下左节点
            while (mostRight.right !== null && mostRight.right !== current) {
                mostRight = mostRight.right;
            }

            if (mostRight.right === null) {
                mostRight.right = current; // 设置后继节点
                current = current.left;
                continue;
            } else if (mostRight.right === current) {
                // current的前驱节点 -> current 的场景，实际上就是左分支打印完了后通过morris设置的right回到了current，此时属于切换场景
                ret.push(current.val);
                mostRight.right = null; // 还原
                current = current.right;
            }
        } else { // current -> current.right
            ret.push(current.val);
            current = current.right;
        }
    }

    return ret;
};