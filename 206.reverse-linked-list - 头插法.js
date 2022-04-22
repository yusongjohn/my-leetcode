var reverseList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    // ----- 头插法 - 模拟一个虚拟节点
    const dummyNode = new ListNode(-1, head);
    let preNode = head;
    let currentNode = head.next;

    while (currentNode) {
        const nextNode = currentNode.next;
        preNode.next = nextNode;
        currentNode.next = dummyNode.next;
        dummyNode.next = currentNode;

        // preNode = currentNode; // 关键：不需要啊
        currentNode = nextNode;
    }
    return dummyNode.next;
};