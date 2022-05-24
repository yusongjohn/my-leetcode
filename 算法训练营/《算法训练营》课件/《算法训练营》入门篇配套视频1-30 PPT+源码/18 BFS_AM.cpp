#include<iostream>
#include<cstring>//memset函数需要该头文件 
#include<queue>//引入队列头文件
using namespace std;
const int maxn=10005; //结点数最大值
int E[maxn][maxn]; //邻接矩阵
bool visited[maxn]; //访问标志数组，"true"表示已访问 
int n,m; //结点数，边数 

void createAM(){
    int u,v;
	cin>>n>>m;
	for(int i=1;i<n;i++)//初始化所有值为0，如果是网，则初始化为无穷大
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

void BFS_AM(int u){ //基于邻接矩阵的广度优先遍历
    queue<int>Q; //创建一个普通队列(先进先出)
	visited[u]=true;
    Q.push(u); //源点u入队
    cout<<u<<"\t";
    while(!Q.empty()){ //如果队列不空
        int v=Q.front(); //取出队头元素
        Q.pop(); //队头元素出队
        for(int w=1;w<=n;w++){ //依次检查v的所有邻接点
            if(E[v][w]&&!visited[w]){ //v、w邻接而且w未被访问
            	cout<<w<<"\t";
            	visited[w]=true;
            	Q.push(w);
            }
        }
    }
}

int main(){
    createAM();
    printg();
    memset(visited,false,sizeof(visited));//初始化为false 
    cout<<"广度优先遍历序列："<<endl;
    BFS_AM(1);
    return 0;
}
/*测试数据
6 9
1 3
1 2
2 4
3 5
3 2
4 6
4 3
5 6
5 4
*/ 
