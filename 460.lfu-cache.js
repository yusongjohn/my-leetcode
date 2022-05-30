/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.size = 0;
    this.minFreq = 0;
    this.capacity = capacity;
    this.freqMap = new Map();
    this.keyMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    const dNode = this.keyMap.get(key);
    if (!dNode) return -1;

    // 删除
    const originUseCount = dNode.useCount;
    const dLinkedList = this.freqMap.get(originUseCount);
    dLinkedList.remove(dNode);

    const nextUseCount = originUseCount + 1;
    // 初始错在这一步了导致case没过，需要保证是当前minReq所在dLinkedList没有了
    if (originUseCount === this.minFreq && dLinkedList.size === 0) {
        this.freqMap.delete(originUseCount);
        this.minFreq = nextUseCount;
    }

    // 新增
    dNode.useCount++;
    if (!this.freqMap.has(nextUseCount)) {
        this.freqMap.set(nextUseCount, new DLinkedList());
    }
    const nextDLinkedList = this.freqMap.get(nextUseCount);
    nextDLinkedList.addToHead(dNode);
    return dNode.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.capacity <= 0) {
        return;
    }

    const dNode = this.keyMap.get(key);
    // 如果该节点已经存在，则更新值，并访问一次
    if (dNode) {
        dNode.value = value;
        this.get(key);
        return;
    }

    // size 判断下
    if (this.size === this.capacity) {
        // 这里需要一个 O(1) 获取最少使用频次
        const minReqLinkedList = this.freqMap.get(this.minFreq);
        const tailNode = minReqLinkedList.removeTail();
        this.keyMap.delete(tailNode.key)
        this.size--;
    }

    const newNode = new DNode(key, value);
    this.keyMap.set(key, newNode);
    const useCount = newNode.useCount; // 第一次使用
    this.minFreq = useCount; // 只要有新节点，minFreq 从 1 开始

    if (!this.freqMap.has(useCount)) {
        this.freqMap.set(useCount, new DLinkedList());
    }
    const dLinkedList = this.freqMap.get(useCount);
    dLinkedList.addToHead(newNode);
    this.size++;
};

function DNode(key, value) {
    this.key = key;
    this.value = value;
    this.useCount = 1;

    this.prev = null;
    this.next = null;
}

function DLinkedList() {
    this.size = 0; // 链表有多少项
    this.dummyHead = new DNode(-1, -1);
    this.dummyTail = new DNode(-1, -1);

    this.dummyTail.prev = this.dummyHead;
    this.dummyHead.next = this.dummyTail;
}

DLinkedList.prototype.addToHead = function (dNode) {
    const nextNode = this.dummyHead.next;
    this.dummyHead.next = dNode;
    dNode.prev = this.dummyHead;

    dNode.next = nextNode;
    nextNode.prev = dNode;
    this.size++;
}

DLinkedList.prototype.removeTail = function () {
    if (this.size === 0) {
        return;
    }
    const tailNode = this.dummyTail.prev
    const lastNodePrev = tailNode.prev;
    lastNodePrev.next = this.dummyTail;
    this.dummyTail.prev = lastNodePrev;
    this.size--;
    return tailNode;
}

DLinkedList.prototype.remove = function (dNode) {
    if (!dNode) return;    
    this.size--;

    const preNode = dNode.prev;
    const nextNode = dNode.next;
    preNode.next = nextNode;
    nextNode.prev = preNode;
}