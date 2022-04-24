const { createLinkedList } = require("./utils");

// 左侧指针
let left;

function isPalindrome(head) {
    left = head;
    return traverse(head);
}

function traverse(right) {
    if (right == null) return true;
    let res = traverse(right.next);
    // 后序遍历代码
    res = (res && (right.val == left.val))
    left = left.next;
    return res;
}

const result = isPalindrome(createLinkedList([1, 2]));
console.log(result);