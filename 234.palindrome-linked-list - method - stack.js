/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function (head) {
    const stack = [];
    let first = head;
    while (head) {
        stack.push(head);
        head = head.next;
    }

    while (stack.length) {
        if (stack.pop().val !== first.val) {
            return false
        }
        first = first.next;
    }

    return true;
};