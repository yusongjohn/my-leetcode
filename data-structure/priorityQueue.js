
// compareTo 返回值 按照下述方式定义，则返回一个大顶堆，否则是一个小顶堆
// 大于 0: 表示当前元素大
// 等于：相等
// 小于0，anotherElement大

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
    _down(this.items, 0)
    return popItem
}

function _down(items, parentIndex) {
    const heapSize = items.length;


    while (true) {
        // 第一次写错了，写在外面了
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

        // 第一次写错了，写在外面了
        parentIndex = Math.floor((currentIndex - 1) / 2);
    }
}

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}


// 示例：Q.347、Q.23