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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let current = root;
    let mostRight = null;
    let pre = null;
    while (current != null) { // morris遍历中，只有最后一个节点的right是null
        mostRight = current.left;
        if (mostRight) { // 有左节点，找到current的前驱
            while (mostRight.right != null && mostRight.right !== current) {
                mostRight = mostRight.right;
            }

            if (mostRight.right === null) { // 第一次, current有left才会进入到这里
                mostRight.right = current;
                current = current.left;
            } else if (mostRight.right === current) { // 第二次，只要有左节点就会有第二次到；此时左分支遍历完成，处理 current => 中序
                if (pre && pre.val >= current.val) {
                    return false;
                }
                pre = current;
                console.log(current.val);
                mostRight.right = null;
                current = current.right;
            }
        } else { // 没有左节点，跳转到右节点；第一次
            if (pre && pre.val >= current.val) {
                return false;
            }
            pre = current;
            console.log(current.val)
            current = current.right;
        }
    }
    return true;
};

// 简化(合并)后面部分的代码，但是这样逻辑不够清晰
var isValidBST = function (root) {
    let current = root;
    let mostRight = null;
    let pre = null;
    while (current != null) { // morris遍历中，只有最后一个节点的right是null
        mostRight = current.left;
        if (mostRight) { // 有左节点，找到current的前驱
            while (mostRight.right != null && mostRight.right !== current) {
                mostRight = mostRight.right;
            }

            if (mostRight.right === null) { // 第一次, current有left才会进入到这里
                mostRight.right = current;
                current = current.left;
                continue;
            } else if (mostRight.right === current) { // 第二次，只要有左节点就会有第二次到；此时左分支遍历完成，处理 current => 中序
                mostRight.right = null;
            }
        }
        
        if (pre && pre.val >= current.val) {
            return false;
        }
        pre = current;
        current = current.right;
    }
    return true;
};