#include<iostream>
#include<cstring>//memset函数需要该头文件 
#include<queue>//引入队列头文件
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
		for(node *t=head[u];t!=NULL;t=t->next){ //访问u的所有邻接点 
			cout<<"["<<t->v<<"]\t";
		}
		cout<<endl;
	}
}

void BFS_AL(int u){//基于邻接表的广度优先遍历
    queue<int>Q; //创建一个普通队列(先进先出)，里面存放int类型
    cout<<u<<"\t";
    visited[u]=true;
    Q.push(u); //源点v入队
    while(!Q.empty()){ //如果队列不空
        int v=Q.front(); //取出队头元素
        Q.pop();  //队头元素出队
        for(node *p=head[v];p;p=p->next){ //依次检查v的所有邻接点
        	int w=p->v;//w为v的邻接点
            if(!visited[w]){//w未被访问
            	cout<<w<<"\t";
            	visited[w]=true;
            	Q.push(w);
            }
        }
    }
}

void BFS(){//非连通图，基于邻接表的广度优先遍历
    for(int i=1;i<=n;i++)//非连通图需要查漏点，检查未被访问的顶点
    	if(!visited[i])//i未被访问,以i为起点再次广度优先遍历
       		BFS_AL(i);
}

int main(){
    createAL();
    printg();
    memset(visited,false,sizeof(visited));//初始化为false 
    cout<<"广度优先遍历序列："<<endl;
    BFS_AL(1);
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
