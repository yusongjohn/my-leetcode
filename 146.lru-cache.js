/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = {};
    this.dLinkedNodeList = new DLinkedNodeList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const node = this.map[key];
    if (!node) {
        return -1;
    }
    this.dLinkedNodeList.removeNode(node);
    this.dLinkedNodeList.addToHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const oldNode = this.map[key];
    if (oldNode) {
        oldNode.val = value;
        this.get(key);
        return;
    }

    if (this.dLinkedNodeList.size == this.capacity) {
        const removeNode = this.dLinkedNodeList.removeTail();
        delete this.map[removeNode.key]
    }
    // 一个新节点
    const newNode = new DLinkedNode({ key, value });
    this.map[key] = newNode;
    this.dLinkedNodeList.addToHead(newNode);
};

function DLinkedNode({ key, value }, pre, next) {
    this.key = key;
    this.val = value;
    this.prev = pre || null;
    this.next = next || null;
}

function DLinkedNodeList() {
    this.size = 0;
    this.head = new DLinkedNode(-1, -1);
    this.tail = new DLinkedNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

// 添加新节点到头部
DLinkedNodeList.prototype.addToHead = function (newNode) {
    const originNext = this.head.next;

    // 连接 newNode 和 originNext
    originNext.prev = newNode;
    newNode.next = originNext;

    // 连接 head 和 newNode
    this.head.next = newNode;
    newNode.prev = this.head;

    this.size++;
}

// 删除尾部不常用的节点
DLinkedNodeList.prototype.removeTail = function () {
    if (this.size === 0) {
        return;
    }
    const lastNode = this.tail.prev;
    const preNode = lastNode.prev;

    preNode.next = this.tail;
    this.tail.prev = preNode;

    this.size--;
    return lastNode;
}

// 删除指定的节点
DLinkedNodeList.prototype.removeNode = function (curNode) {
    const preNode = curNode.prev;
    const nextNode = curNode.next;
    preNode.next = nextNode;
    nextNode.prev = preNode;
    this.size--;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


const lruCache = new LRUCache(2);
lruCache.put(2, 6);
lruCache.put(1, 5);
lruCache.put(1, 2);
lruCache.get(1);
// lruCache.get(2);