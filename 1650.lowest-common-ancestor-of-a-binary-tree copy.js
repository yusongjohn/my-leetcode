
// 给定一棵二叉树中的两个节点 p 和 q，返回它们的最近公共祖先节点（LCA）。

// 每个节点都包含其父节点的引用（指针）。Node 的定义如下：

// class Node {
//     public int val;
//     public Node left;
//     public Node right;
//     public Node parent;
// }
// 根据维基百科中对最近公共祖先节点的定义：“两个节点 p 和 q 在二叉树 T 中的最近公共祖先节点是后代节点中既包括 p 又包括 q 的最深节点（我们允许一个节点为自身的一个后代节点）”。一个节点 x 的后代节点是节点 x 到某一叶节点间的路径中的节点 y。


/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */


// version 1 self - 好low啊
var lowestCommonAncestor = function (p, q) {
    const pPaths = [];
    while (p) {
        pPaths.push(p);
        p = p.parent;
    }

    const qPaths = [];
    while (q) {
        qPaths.push(q);
        q = q.parent;
    }

    let ret = null;
    while (pPaths.length && qPaths.length) {
        const pCurrentNode = pPaths.pop();
        const qCurrentNode = qPaths.pop();
        if (pCurrentNode === qCurrentNode) {
            ret = pCurrentNode;
        }
    }

    return ret
};

// version 2
var lowestCommonAncestor = function (p, q) {
    const pPaths = [];
    while (p) {
        pPaths.push(p);
        p = p.parent;
    }

    while (q) {
        if (pPaths.includes(q)) {
            return q;
        }
        q = q.parent;
    }
    return null;
};

// version 3：
var lowestCommonAncestor = function (p, q) {

    // 判断 q 是不是 p 的孩子；
    function dfs(p, q) {
        if (!p) {
            return;
        }
        if (p === q) {
            return true;
        }
        const leftCase = dfs(p.left, q);
        const rightCase = dfs(p.right, q);
        return leftCase || rightCase;
    }

    while (p) {
        if (dfs(p, q)) {
            return p
        };
        p = p.parent;
    }
};
