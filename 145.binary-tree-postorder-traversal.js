// 后序遍历：有左树的节点第二次被遍历到时逆序存储左树的右边界
const postorderTraversal = (root, ans = []) => {
    if (!root) return ans;
    let [curr, mostRight] = [root, null];
    while (curr) {
        mostRight = curr.left;
        if (mostRight) {
            while (mostRight.right && mostRight.right != curr) {
                mostRight = mostRight.right;
            }
            if (mostRight.right == null) {
                mostRight.right = curr;
                curr = curr.left;
                continue;
            } else {
                mostRight.right = null;
                postOrder(curr.left, ans); // 有左树的节点第二次被遍历到
            }
        }
        curr = curr.right;
    }
    postOrder(root, ans); // 整个树的右边界
    return ans;
}
// 反转左树右边界(反转链表)
const reverseRightBound = (node) => {
    let [prev, next] = [null, null];
    while (node) {
        next = node.right;
        node.right = prev;
        prev = node;
        node = next;
    }
    return prev;
}
// 逆序存储
const postOrder = (node, ans = []) => {
    const newRoot = reverseRightBound(node);
    let curr = newRoot;
    while (curr) {
        ans.push(curr.val);
        curr = curr.right;
    }
    reverseRightBound(newRoot);
}