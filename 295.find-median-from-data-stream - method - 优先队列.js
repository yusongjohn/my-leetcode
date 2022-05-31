var MedianFinder = function () {
    this.smallHeap = new PriorityQueue((a, b) => a - b);
    this.bigHeap = new PriorityQueue((a, b) => b - a);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.smallHeap.size() >= this.bigHeap.size()) { // 从 samllHeap和num中选一个最小的放进bigHeap
        this.smallHeap.enqueue(num);
        const smallestNumInSmallHeap = this.smallHeap.dequeue();

        this.bigHeap.enqueue(smallestNumInSmallHeap);
    } else if (this.smallHeap.size() < this.bigHeap.size()) { // 从bigHeap挑一个最大的放进samllHeap
        this.bigHeap.enqueue(num);
        const biggesttNumInSmallHeap = this.bigHeap.dequeue();
        this.smallHeap.enqueue(biggesttNumInSmallHeap);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const leftPartSize = this.bigHeap.size();
    const rigthPartSize = this.smallHeap.size();
    if (leftPartSize === rigthPartSize) {
        return (this.bigHeap.peek() + this.smallHeap.peek()) / 2
    } else if (leftPartSize < rigthPartSize) {
        return this.smallHeap.peek()
    } else if (leftPartSize > rigthPartSize) {
        return this.bigHeap.peek()
    }
};

function PriorityQueue(compareTo, items = []) { // 确保Item具有compareTo接口
    // 插入式建堆
    this.items = []; // 空堆
    items.forEach(item => this.enqueue(item)); // 逐个插入元素
    this.compareTo = compareTo
}

PriorityQueue.prototype.size = function () {
    return this.items.length;
}

PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
}

PriorityQueue.prototype.peek = function () {
    return this.items.length ? this.items[0] : undefined;
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
    this._down(this.items, 0)
    return popItem
}

PriorityQueue.prototype._down = function (items, parentIndex) {
    const heapSize = items.length;


    while (true) {
        // 第一次写错了，写在外面了
        const c1Index = 2 * parentIndex + 1;
        const c2Index = 2 * parentIndex + 2;
        let minIndex = parentIndex


        // items[minIndex] > items[c1Index]
        if (c1Index < heapSize && this.compareTo(items[minIndex], items[c1Index]) > 0) {
            minIndex = c1Index
        }

        // items[minIndex] > items[c2Index]
        if (c2Index < heapSize && this.compareTo(items[minIndex], items[c2Index]) > 0) {
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
    while (currentIndex > 0 && this.compareTo(this.items[currentIndex], this.items[parentIndex]) < 0) {
        swap(this.items, currentIndex, parentIndex);
        currentIndex = parentIndex;

        // 第一次写错了，写在外面了
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
}

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */