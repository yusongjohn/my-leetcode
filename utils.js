function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createLinkedList(nums) {
    const dummyNode = new ListNode(-1);
    let preNode = dummyNode;
    for (let i = 0; i < nums.length; i++) {
        preNode.next = new ListNode(nums[i]);
        preNode = preNode.next;
    }
    return dummyNode.next;
}

function convertList2Array(head) {
    const tmp = [];
    while (head) {
        tmp.push(head)
        head = head.next
    }
    console.log(tmp)
}

module.exports = {
    createLinkedList,
    convertList2Array,
    TreeNode,
    ListNode: function (val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


// -------------------
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function createTreeByArray([]) {

}