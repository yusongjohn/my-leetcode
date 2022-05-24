#include<iostream>
#include<cstring>
using namespace std;
const int maxn=10005; //结点数最大值
int E[maxn][maxn]; //邻接矩阵
bool visited[maxn]; //访问标志数组，"true"表示已访问 
int n,m; //结点数，边数 

void createAM(){
    int u,v;
	cin>>n>>m;
	for(int i=1;i<n;i++) //初始化所有值为0，如果是网，则初始化为无穷大
		for(int j=1;j<n;j++)
			E[i][j]=0;
    for(int i=1;i<=m;i++){ //m为边数
		cin>>u>>v; //一条边的两个结点编号
		E[u][v]=E[v][u]=1; //邻接矩阵储置1
    }
}

void printg(){//输出邻接矩阵
    cout<<"图的邻接矩阵为："<<endl;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++)
			cout<<E[i][j]<<"\t";
        cout<<endl;
    }
}


void DFS_AM(int u){ //基于邻接矩阵的深度优先遍历
    cout<<u<<"\t";
    visited[u]=true;
    for(int v=1;v<=n;v++) //依次检查u的所有邻接点
		if(E[u][v]&&!visited[v]) //u、v邻接而且v未被访问
			DFS_AM(v); //从v开始递归深度优先遍历
}

int main(){
    createAM();
    printg();
    memset(visited,false,sizeof(visited));//初始化为false 
    cout<<"深度优先遍历序列："<<endl;
    DFS_AM(1);
    return 0;
}
/*测试数据 
8 9
1 3
1 2
2 6
2 5
2 4
3 8
3 7
4 5
7 8
*/ 
