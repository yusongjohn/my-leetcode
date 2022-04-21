/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {};
    nums.forEach(item => {
        if (!map[item]) {
            map[item] = 0
        }
        map[item]++;
    })

    // 实现1: 大顶堆 - 时间复杂度 O(nlogn)
    // 下面实现方式时间复杂度不满要求，可能到 O(nlogn)，而要求小于该值
    // const queueElements = []
    // for (let key in map) {
    //     const count = map[key];
    //     queueElements.push(new BigQueueElement(new Info(key, count)));
    // }

    // const priorityQueue = new PriorityQueue(queueElements);

    // 实现2：动态建堆， 小顶堆  - 时间复杂度 O(nlogk)
    const priorityQueue = new PriorityQueue([]);
    for (let key in map) {
        const queueSize = priorityQueue.size();
        if (queueSize >= k) {
            const topEle = priorityQueue.peek();
            // 应存在了K个元素，如果当前元素频数小于这里的最小值，则丢弃
            if (topEle.info.count > map[key]) {
                continue;
            }
            priorityQueue.dequeue();
        }
        const info = new Info(key, map[key])
        priorityQueue.enqueue(new SmallQueueElement(info));
    }

    let result = [];
    while (priorityQueue.size()) {
        // 关键
        result.unshift(priorityQueue.dequeue().info.key);
    }
    return result;
};

function Info(key, count) {
    this.key = key;
    this.count = count;
}


// ---- 小顶堆 ----
function SmallQueueElement(info) {
    this.info = info
}

// 大于 0: 表示当前元素大
// 等于：相等
// 小于0，anotherElement大
SmallQueueElement.prototype.compareTo = function (anotherElement) {
    return (this.info.count - anotherElement.info.count);
}

// ---- 大顶堆 ----
function BigQueueElement(info) {
    this.info = info
}

// 大于 0: 表示当前元素大
// 等于：相等
// 小于0，anotherElement大
BigQueueElement.prototype.compareTo = function (anotherElement) {
    return (this.info.count - anotherElement.info.count);
}
