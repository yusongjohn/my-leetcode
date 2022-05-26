const PriorityQueue = require('./priorityQueue');

// labuladong version
function Prim(graph) {
    // graph 是用邻接表表示的一幅图，
    // graph[s] 记录节点 s 所有相邻的边，
    // 三元组 let[]{from, to, weight} 表示一条边
    this.graph = graph;

    // 核心数据结构，存储「横切边」的优先级队列
    this.pq = new PriorityQueue((a, b) => {
        return a[2] - b[2]; // 按照边的权重从小到大排序
    });

    this.weightSum = 0; // 记录最小生成树的权重和
    this.inMST = new Array(graph.length); // 类似 visited 数组的作用，记录哪些节点已经成为最小生成树的一部分

    // 随便从一个点开始切分都可以，我们不妨从节点 0 开始
    this.inMST[0] = true;
    this.cut(0);

    // 不断进行切分，向最小生成树中添加边
    while (!this.pq.isEmpty()) {
        let edge = this.pq.dequeue();
        let to = edge[1];
        let weight = edge[2];
        if (this.inMST[to]) {
            // 节点 to 已经在最小生成树中，跳过
            // 否则这条边会产生环
            continue;
        }
        // 将边 edge 加入最小生成树
        this.weightSum += weight;
        this.inMST[to] = true;
        // 节点 to 加入后，进行新一轮切分，会产生更多横切边
        this.cut(to);
    }
}

// 将 s 的横切边加入优先队列
Prim.prototype.cut = function (s) {
    // 遍历 s 的邻边
    for (let edge of this.graph[s]) {
        let to = edge[1];
        if (this.inMST[to]) {
            // 相邻接点 to 已经在最小生成树中，跳过
            // 否则这条边会产生环
            continue;
        }
        // 加入横切边队列
        this.pq.enqueue(edge);
    }
}

// 最小生成树的权重和
Prim.prototype.getWeightSum = function () {
    return this.weightSum;
}

// 判断最小生成树是否包含图中的所有节点
Prim.prototype.allConnected = function () {
    for (let i = 0; i < this.inMST.length; i++) {
        if (!this.inMST[i]) {
            return false;
        }
    }
    return true;
}


module.exports = Prim