/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//  二维坐标 (x,y) 可以转换成 x * n + y 这个数（m 是棋盘的行数，n 是棋盘的列数），敲黑板，这是将二维坐标映射到一维的常用技巧。
// 其次，我们之前描述的「祖师爷」是虚构的，需要给他老人家留个位置。索引 [0.. m*n-1] 都是棋盘内坐标的一维映射，那就让这个虚拟的 dummy 节点占据索引 m * n 好了。

// from labladong 
var solve = function (board) {
    if (board.length == 0) return;

    let m = board.length;
    let n = board[0].length;
    // 给 dummy 留一个额外位置
    let uf = new UnionFind(m * n + 1);
    let dummy = m * n;
    // 将首列和末列的 O 与 dummy 连通
    for (let i = 0; i < m; i++) {
        if (board[i][0] == 'O')
            uf.union(i * n, dummy);
        if (board[i][n - 1] == 'O')
            uf.union(i * n + n - 1, dummy);
    }
    // 将首行和末行的 O 与 dummy 连通
    for (let j = 0; j < n; j++) {
        if (board[0][j] == 'O')
            uf.union(j, dummy);
        if (board[m - 1][j] == 'O')
            uf.union(n * (m - 1) + j, dummy);
    }
    // 方向数组 d 是上下左右搜索的常用手法
    let d = [[1, 0], [0, 1], [0, -1], [-1, 0]];
    for (let i = 1; i < m - 1; i++)
        for (let j = 1; j < n - 1; j++)
            if (board[i][j] == 'O')
                // 将此 O 与上下左右的 O 连通
                for (let k = 0; k < 4; k++) {
                    let x = i + d[k][0];
                    let y = j + d[k][1];
                    if (board[x][y] == 'O')
                        uf.union(x * n + y, i * n + j);
                }
    // 所有不和 dummy 连通的 O，都要被替换
    for (let i = 1; i < m - 1; i++)
        for (let j = 1; j < n - 1; j++)
            if (!uf.connected(dummy, i * n + j))
                board[i][j] = 'X';
};

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
