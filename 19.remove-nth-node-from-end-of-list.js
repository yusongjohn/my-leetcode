/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

const { createLinkedList, ListNode } = require("./utils");

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);
    let first = head;
    let second = dummy;

    for (let i = 0; i < n; ++i) {
        first = first.next;
    }

    // 如果n=2，first 此时指向第三个节点
    // 按理说 second从head开始遍历，刚好指向倒数第n个节点，但实际上我们需要的是倒数第n + 1 个节点
    // 所以second从dummu开始遍历，刚好指向 倒数第n + 1 个节点
    while (first) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    let ans = dummy.next;
    delete dummy;
    return ans;
};
// @lc code=end

const head = createLinkedList([1, 2, 3, 4, 5]);
removeNthFromEnd(head, 2)