// 给定一棵二叉树的根节点 root 和 TreeNode 类对象的数组（列表） nodes，返回 nodes 中所有节点的最近公共祖先（LCA）。数组（列表）中所有节点都存在于该二叉树中，且二叉树中所有节点的值都是互不相同的。

// 我们扩展二叉树的最近公共祖先节点在维基百科上的定义：“对于任意合理的 i 值， n 个节点 p1 、 p2、...、 pn 在二叉树 T 中的最近公共祖先节点是后代中包含所有节点 pi 的最深节点（我们允许一个节点是其自身的后代）”。一个节点 x 的后代节点是节点 x 到某一叶节点间的路径中的节点 y。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */


function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */

// 一个节点是否是最近祖先节点只有两个可能
// 1. 左子树中找到部分节点，右子树找到部分节点
// 2. 当前节点属于其中一个节点，其余节点
// version 1
var lowestCommonAncestor = function (root, nodes) {
    if (nodes.length === 1) {
        return nodes[0]
    }
    let ancestor = null;
    const sumCount = nodes.length;
    function dfs(root, nodes) {
        if (!root) return 0;

        // leftCount、rightCount 用来确保这些节点都是在当前节点子树中找到的
        const leftCount = dfs(root.left, nodes);
        const rightCount = dfs(root.right, nodes);

        if (!ancestor && nodes.length === 0 && (leftCount + rightCount === sumCount)) {
            ancestor = root;
            return leftCount + rightCount;
        }

        const targetIndex = nodes.indexOf(root);
        if (targetIndex >= 0) {
            if (!ancestor && nodes.length === 1 && (leftCount + rightCount === sumCount - 1)) {
                ancestor = root;
            }
            nodes.splice(targetIndex, 1);
            return leftCount + rightCount + 1;
        }

        return leftCount + rightCount
    }

    dfs(root, nodes);
    return ancestor;
};

// version 2 针对
var lowestCommonAncestor = function (root, nodes) {
    if (nodes.length === 1) {
        return nodes[0]
    }
    let ancestor = null;
    const sumCount = nodes.length;
    function dfs(root, nodes) {
        if (!root) return 0;

        const leftCount = dfs(root.left, nodes);
        const rightCount = dfs(root.right, nodes);

        let currentCount = 0;
        const targetIndex = nodes.indexOf(root);
        if (targetIndex >= 0) {
            nodes.splice(targetIndex, 1);
            currentCount = 1;
        }

        // 在当前节点及其子树中找到了所有的目标
        // 由于是后继遍历，第一满足改条件的一定是最近的祖先节点
        if (!ancestor && (leftCount + rightCount + currentCount === sumCount)) {
            ancestor = root;
        }

        return leftCount + rightCount + currentCount;
    }

    dfs(root, nodes);
    return ancestor;
};





const three = new TreeNode(3, null, null);
const fifteen = new TreeNode(15, three, null)
const twelve = new TreeNode(12, fifteen, null);
const one = new TreeNode(1, twelve, null);
const eleven = new TreeNode(11, one, null)


lowestCommonAncestor(eleven, [one, twelve, fifteen, eleven])