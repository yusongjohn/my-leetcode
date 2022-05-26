// dijkstra�㷨
#include <iostream>
#include <algorithm>
#include <stack>
using namespace std;
const int N = 1005;
const int INF = 0x3f3f3f3f;
int G[N][N], dist[N];
int p[N];
int n, m;
bool flag[N];

void dijkstra(int u)
{
	for (int i = 1; i <= n; i++)
	{
		dist[i] = G[u][i];
		flag[i] = false;
		if (dist[i] == INF)
			p[i] = -1;
		else
			p[i] = u;
	}
	dist[u] = 0;
	flag[u] = true;
	for (int i = 1; i < n; i++)
	{
		int temp = INF, t = u;
		for (int j = 1; j <= n; j++)
		{
			if (!flag[j] && dist[j] < temp)
			{
				t = j;
				temp = dist[j];
			}
		}
		if (t == u)
			return;
		flag[t] = true;
		for (int j = 1; j <= n; j++)
		{
			if (!flag[j] && dist[j] > dist[t] + G[t][j])
			{
				dist[j] = dist[t] + G[t][j];
				p[j] = t;
			}
		}
	}
}

void print()
{
	for (int i = 1; i <= n; i++)
	{
		if (i != 1)
			cout << " ";
		if (dist[i] == INF)
			cout << "impossible";
		else
			cout << dist[i];
	}
	cout << endl;
}

void findp(int u)
{
	if (u == -1)
		return;
	findp(p[u]);
	cout << u << "\t";
}

void findpath(int u)
{
	cout << "Դ��Ϊ��" << u << endl;
	cout << "Դ�㵽������������·��Ϊ��" << endl;
	for (int i = 1; i <= n; i++)
	{
		findp(i);
		cout << "��̾���Ϊ��" << dist[i] << endl;
	}
}

void findpath2(int u)
{
	int x;
	stack<int> s;
	cout << "Դ��Ϊ��" << u << endl;
	cout << "Դ�㵽������������·��Ϊ��" << endl;
	for (int i = 1; i <= n; i++)
	{
		x = p[i];
		while (x != -1)
		{
			s.push(x);
			x = p[x];
		}
		while (!s.empty())
		{
			cout << s.top() << "---";
			s.pop();
		}
		cout << i << "\t��̾���Ϊ��" << dist[i] << endl;
	}
}

int main()
{
	int u, v, w, st;
	int t;
	cin >> t;
	while (t--)
	{
		cin >> n >> m;
		for (int i = 1; i <= n; i++)
			for (int j = 1; j <= n; j++)
				G[i][j] = INF;
		for (int i = 1; i <= m; i++)
		{
			cin >> u >> v >> w;
			G[u][v] = min(G[u][v], w);
		}
		cin >> st;
		dijkstra(st);
		findpath(st);
		findpath2(st);
	}
	return 0;
}
/*��������
2
5 11
1 5 12
5 1 8
1 2 16
2 1 29
5 2 32
2 4 13
4 2 27
1 3 15
3 1 21
3 4 7
4 3 19
5
3 5
1 2 6
1 3 13
2 1 10
2 3 4
3 1 5
1
*/
