/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // while循环    
    let i = 0;
    let sNode = null;
    let eNode = null;

    let startNode = null;
    let preNode = null;
    let currentNode = head;
    while (currentNode) {
        const next = currentNode.next;
        if (i % k === 0) {
            sNode = currentNode;
        }

        if (i % k === k - 1) {
            eNode = currentNode;
            if (preNode) {
                preNode.next = eNode;
            } else {
                startNode = eNode; // 第一部分的尾结点是最终结果的头结点，记录下。
            }
            preNode = sNode;

            reverse(sNode, eNode);
            console.log('one round: ', startNode, preNode.val)
        }

        i++;
        currentNode = next
    }

    return startNode ? startNode : head;
};

function reverse(startNode, endNode) {
    let preNode = endNode.next;
    while (startNode !== endNode) {
        const nextNode = startNode.next;
        startNode.next = preNode;
        preNode = startNode;
        startNode = nextNode;
    }

    // 上面while循环没有处理，这里处理 endNode
    endNode.next = preNode;
}