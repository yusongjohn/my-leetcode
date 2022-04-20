/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const elements = []
    lists.forEach(listNode => listNode && elements.push(new QueueElement(listNode)));
    const priorityQueue = new PriorityQueue(elements);

    const dummyNode = new ListNode(-1);
    let preNode = dummyNode;
    while (priorityQueue.size()) {
        const minElement = priorityQueue.dequeue();
        preNode.next = minElement.listNode;
        preNode = preNode.next;
        const nextNode = minElement.listNode.next;
        nextNode && priorityQueue.enqueue(new QueueElement(nextNode));
    }

    return dummyNode.next;
};
// @lc code=end

// ----------------------------------------------------------------------------------------------- 优先队列
function QueueElement(listNode) {
    this.listNode = listNode
}

// 大于 0: 表示当前元素大
// 等于：相等
// 小于0，anotherElement大
QueueElement.prototype.compareTo = function (anotherElement) {
    return this.listNode.val - anotherElement.listNode.val;
}

// 小顶堆
function PriorityQueue(items) { // 确保Item具有compareTo接口
    // 插入式建堆
    // 空堆
    this.items = [];
    // 逐个插入元素
    items.forEach(item => this.enqueue(item))
}

PriorityQueue.prototype.size = function () {
    return this.items.length;
}

PriorityQueue.prototype.dequeue = function () {
    const size = this.items.length
    if (size <= 1) {
        return this.items.pop()
    }
    // 先交换头尾元素        
    swap(this.items, 0, this.items.length - 1);
    // 然后弹出最后一个元素（上一步的堆顶元素）
    const popItem = this.items.pop();
    // 堆化（下溢）
    _down(this.items, 0)
    return popItem
}

function _down(items, parentIndex) {
    const heapSize = items.length;

    while (true) {
        const c1Index = 2 * parentIndex + 1;
        const c2Index = 2 * parentIndex + 2;
        let minIndex = parentIndex


        // items[minIndex] > items[c1Index]
        if (c1Index < heapSize && items[minIndex].compareTo(items[c1Index]) > 0) {
            minIndex = c1Index
        }

        // items[minIndex] > items[c2Index]
        if (c2Index < heapSize && items[minIndex].compareTo(items[c2Index]) > 0) {
            minIndex = c2Index
        }

        // 包含了currentIndex是叶子节点 和 最小情况
        if (parentIndex === minIndex) {
            break;
        }

        swap(items, parentIndex, minIndex);
        parentIndex = minIndex;
    }
}

// 就是 heapify
PriorityQueue.prototype.enqueue = function (key) {
    this.items.push(key)
    // 获取存储位置
    let currentIndex = this.items.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // this.items[currentIndex] < this.items[parentIndex]
    while (currentIndex > 0 && this.items[currentIndex].compareTo(this.items[parentIndex]) < 0) {        
        swap(this.items, currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
}

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}