#include <iostream>
using namespace std;
#define N 100
int fa[N]; // 集合号
int n, m;

void init()
{
    for (int i = 1; i <= n; i++)
        fa[i] = i;
}

int Find(int x)
{
    if (x != fa[x])
        fa[x] = Find(fa[x]); // 将x的集合号设置为祖先集合号，扁平化，防止退化为线性的
    return fa[x];
}

void Union(int x, int y)
{
    int a, b;
    a = Find(x);
    b = Find(y);
    if (a != b)
        fa[b] = a;
}

int main()
{
    int x, u, v, sum = 0;
    cout << "input n and m:" << endl;
    cin >> n >> m;
    init();
    cout << "input u and v" << endl;
    for (int i = 1; i <= m; i++)
    {
        cin >> u >> v;
        Union(u, v);
    }
    for (int i = 1; i <= n; i++)
    { //ͳ�Ƽ�����
        Find(i);
        cout << fa[i] << " ";
        if (fa[i] == i)
            sum++;
    }
    cout << endl;
    cout << "sum=" << sum << endl;
    return 0;
}
/*
10 9
1 2
3 4
5 2
4 6
2 6
8 7
9 7
1 6
2 4
*/
