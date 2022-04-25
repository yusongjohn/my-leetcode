/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let preNode = head;
    let currentNode = head.next;
    while (currentNode) {
        // const nextNode = currentNode.next;
        // 如果和上一个节点的值相同，则删除当前节点
        if (currentNode.val === preNode.val) {
            preNode.next = currentNode.next;
        } else {
            // 如果当前的值不重复，则需要
            preNode = currentNode;
        }

        currentNode = preNode.next; // 实际应该总是preNode.next
    }
    return head;
};