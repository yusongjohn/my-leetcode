/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { createLinkedList } = require("./utils");

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


var getIntersectionNode = function (headA, headB) {
    let tmpA = headA;
    let tmpB = headB;
    while (headA) {
        if (headA === headB) {
            return headA
        }

        headA = headA.next || tmpB;
        headB = headB.next || tmpA;
    }

    return null;
};

getIntersectionNode(createLinkedList([4, 1, 8, 4, 5]), createLinkedList([5, 6, 1, 8, 4, 5]))