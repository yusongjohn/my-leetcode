#include<iostream>//创建有向图的邻接表
using namespace std;
const int maxn=10005; //结点数最大值
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
    char x,y;
	cin>>n>>m;
    for(int i=0;i<m;i++){
        cin>>x>>y; //输入一条边的两个结点字母，如a\b\c\d\e 
        int u=x-'a'; //转换成数字编号
        int v=y-'a';
		adde(u,v);
    }
}

void printg(){//输出邻接表
	cout<<"----------邻接表如下：----------"<<endl;
	for(int u=0;u<n;u++){
		cout<<u<<"-->";
		for(node *t=head[u];t!=NULL;t=t->next){ //访问u的所有邻接点 
			cout<<"["<<t->v<<"]\t";
		}
		cout<<endl;
	}
}

int main(){
    createAL();//创建有向图邻接表
    printg();//输出邻接表
    return 0;
}
/*测试数据
5 7
a b
a c
a e
b c
c d
c e
d e
*/
