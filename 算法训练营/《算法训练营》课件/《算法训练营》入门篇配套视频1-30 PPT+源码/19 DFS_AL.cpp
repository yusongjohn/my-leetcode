#include<iostream>
#include<cstring>//memset函数需要该头文件 
using namespace std;
const int maxn=10005; //结点数最大值
bool visited[maxn]; //访问标志数组，"true"表示已访问 
int n,m;

typedef struct node{ //定义邻接点类型
	int v; //邻接点下标
	struct node *next; //指向下一个邻接点
}node;

node *head[maxn]; //指向第一个邻接点

void adde(int u,int v){//插入一条边
    node *s=new node;
    s->v=v;
    s->next=head[u];
    head[u]=s;
}

void createAL(){//创建有向图邻接表
    int u,v;
	cin>>n>>m;
    for(int i=0;i<m;i++){
        cin>>u>>v; //输入一条边的两个结点
		adde(u,v);
    }
}

void printg(){//输出邻接表
	cout<<"----------邻接表如下：----------"<<endl;
	for(int u=1;u<=n;u++){
		cout<<u<<"-->";
		for(node *t=head[u];t!=NULL;t=t->next){ //依次检查u的所有邻接点 
			cout<<"["<<t->v<<"]\t";
		}
		cout<<endl;
	}
}

void DFS_AL(int u){//基于邻接表的深度优先遍历
    cout<<u<<"\t";
    visited[u]=true;
    for(node *p=head[u];p;p=p->next){//依次检查u的所有邻接点 
    	int v=p->v; //v为u的邻接点
        if(!visited[v])//v未被访问
        	DFS_AL(v);
    }
}

void DFS(){//非连通图，基于邻接表的深度优先遍历
    for(int i=1;i<=n;i++)//非连通图需要查漏点，检查未被访问的顶点
    	if(!visited[i])//i未被访问,以i为起点再次深度优先遍历
       		DFS_AL(i);
}

int main(){
    createAL();
    printg();
    memset(visited,false,sizeof(visited));//初始化为false 
    cout<<"深度优先遍历序列："<<endl;
    DFS_AL(1);
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
