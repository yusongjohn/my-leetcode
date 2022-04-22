/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { ListNode, createLinkedList } = require("./utils");
var mergeKLists = function (lists) {
    if (!lists.length) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0]
    }

    if (lists.length === 2) {
        return mergeTwoListNodes(lists[0], lists[1]);
    }

    const midIndex = Math.floor(lists.length / 2);
    const leftHead = mergeKLists(lists.slice(0, midIndex + 1))
    const rightHead = mergeKLists(lists.slice(midIndex + 1))
    return mergeTwoListNodes(leftHead, rightHead)
};

function mergeTwoListNodes(firstHead, secondHead) {
    if (firstHead === null || secondHead === null) {
        return firstHead || secondHead
    }

    let dummyNode = new ListNode(-1);
    let preNode = dummyNode;

    while (firstHead && secondHead) {
        // 判断哪个值小
        if (firstHead.val < secondHead.val) {
            const nextHead = firstHead.next;
            preNode.next = firstHead;
            preNode.next.next = null; // 切断（保持逻辑清晰）
            preNode = firstHead;
            firstHead = nextHead;
        } else {
            const nextHead = secondHead.next;
            preNode.next = secondHead;
            preNode.next.next = null; // 切断（保持逻辑清晰）
            preNode = secondHead;
            secondHead = nextHead;
        }
    }

    const remainNode = firstHead || secondHead;
    preNode.next = remainNode;
    // console.log(JSON.stringify(dummyNode.next), '-----\n')
    return dummyNode.next;
}
const nodes = [];
[[1, 4, 5], [1, 3, 4], [2, 6]].forEach(nums => nodes.push(createLinkedList(nums)));

const res = mergeKLists(nodes);
console.log(JSON.stringify(res));