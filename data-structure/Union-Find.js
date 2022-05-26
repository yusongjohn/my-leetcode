
// n 为图中节点的个数
function UnionFind(n) {
    this.count = n;
    // 存储每个节点的父节点
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
        this.parent[i] = i;
    }
}

// 将节点 p 和节点 q 连通
UnionFind.prototype.union = function (p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP == rootQ)
        return;

    this.parent[rootQ] = rootP;
    // 两个连通分量合并成一个连通分量
    this.count--;
}

// 判断节点 p 和节点 q 是否连通
UnionFind.prototype.connected = function (p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    return rootP == rootQ;
}

UnionFind.prototype.find = function (x) {
    if (this.parent[x] != x) {
        this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
}

// 返回图中的连通分量个数
UnionFind.prototype.count = function () {
    return this.count;
} 
