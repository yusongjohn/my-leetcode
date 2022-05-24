#include<iostream>//用vector存储无向图
#include<vector>//引入头文件<vector>
using namespace std;
const int maxn=10005; //结点数最大值
vector<int> E[maxn];//每个结点定义一个vector,存储其邻接点
int n,m; //结点数，边数 

void createVec(){ //用vector存储无向图 
	int u,v;
	cin>>n>>m; 
	for(int i=0;i<m;i++){ //m为边数
		cin>>u>>v; //一条边的两个结点编号 
		E[u].push_back(v);
		E[v].push_back(u);
	}
}

void printg(){ //输出邻接表
	cout<<"----------邻接表如下：----------"<<endl;
	for(int u=0;u<n;u++){
		cout<<u<<"-->";
		for(int i=0;i<E[u].size();i++){//访问u的所有邻接点 
			int v=E[u][i];
			cout<<"["<<v<<"]\t";
		}
		cout<<endl;
	}
}

int main(){
    createVec();//创建无向图邻接表
    printg();//输出邻接表
    return 0;
}
/*测试数据
4 5
0 1
0 3
1 2
1 3
2 3
*/
