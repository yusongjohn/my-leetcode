// 最小生成树，prim 算法
#include <iostream>
#include <algorithm>
using namespace std;
const int inf = 0x3f3f3f3f;
const int N = 1005;
int c[N][N], closest[N], lowcost[N], ans[N]; // c[N][N]: 邻接矩阵，值为0，或者是权重值
bool s[N]; // 如果 s[i] = true, 说明节点 i 已加入 U
int n, m;

int prim(int n) // 求最小生成树
{
	s[1] = true; // 初始时，集合中只有一个元素，定点1
	lowcost[1] = 0;

	// 初始化
	for (int i = 2; i <= n; i++)
	{
		lowcost[i] = c[1][i];
		closest[i] = 1;
		s[i] = false;
	}

	for (int i = 1; i < n; i++)
	{
		int temp = inf;
		int t = 1;

		// 在 V-U 集合中寻找lowcost[j]最小的节点 t
		for (int j = 1; j <= n; j++)
		{
			if (!s[j] && lowcost[j] < temp)
			{
				t = j;
				temp = lowcost[j];
			}
		}
		if (t == 1)
		{
			return 0;  // 找不到他t，跳出循环，不存在最小生成树（非连通图）
		}

		s[t] = true; // 否则，t 加入集合 U
		for (int j = 1; j <= n; j++) // 更新 lowcost 和 losest
		{ 
			if (!s[j] && c[t][j] < lowcost[j])
			{
				lowcost[j] = c[t][j];
				closest[j] = t;
			}
		}
	}
	int sumcost = 0;
	for (int i = 1; i <= n; i++)
		sumcost += lowcost[i];
	return sumcost;
}

int main()
{
	int t, u, v, w;
	cin >> t;
	while (t--)
	{
		cin >> n >> m;
		for (int i = 1; i <= n; i++)
			for (int j = 1; j <= n; j++)
				c[i][j] = inf;
		for (int i = 0; i < m; i++)
		{
			cin >> u >> v >> w;
			c[u][v] = c[v][u] = min(c[u][v], w);
		}
		cout << prim(n) << endl;
	}
	return 0;
}
/*��������
1
7 12
1 2 23
1 6 28
1 7 36
2 3 20
2 7 1
3 4 15
3 7 4
4 5 3
4 7 9
5 6 17
5 7 16
6 7 25
*/
