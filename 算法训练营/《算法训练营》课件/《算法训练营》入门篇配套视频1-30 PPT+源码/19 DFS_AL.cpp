#include<iostream>
#include<cstring>//memset������Ҫ��ͷ�ļ� 
using namespace std;
const int maxn=10005; //��������ֵ
bool visited[maxn]; //���ʱ�־���飬"true"��ʾ�ѷ��� 
int n,m;

typedef struct node{ //�����ڽӵ�����
	int v; //�ڽӵ��±�
	struct node *next; //ָ����һ���ڽӵ�
}node;

node *head[maxn]; //ָ���һ���ڽӵ�

void adde(int u,int v){//����һ����
    node *s=new node;
    s->v=v;
    s->next=head[u];
    head[u]=s;
}

void createAL(){//��������ͼ�ڽӱ�
    int u,v;
	cin>>n>>m;
    for(int i=0;i<m;i++){
        cin>>u>>v; //����һ���ߵ��������
		adde(u,v);
    }
}

void printg(){//����ڽӱ�
	cout<<"----------�ڽӱ����£�----------"<<endl;
	for(int u=1;u<=n;u++){
		cout<<u<<"-->";
		for(node *t=head[u];t!=NULL;t=t->next){ //���μ��u�������ڽӵ� 
			cout<<"["<<t->v<<"]\t";
		}
		cout<<endl;
	}
}

void DFS_AL(int u){//�����ڽӱ��������ȱ���
    cout<<u<<"\t";
    visited[u]=true;
    for(node *p=head[u];p;p=p->next){//���μ��u�������ڽӵ� 
    	int v=p->v; //vΪu���ڽӵ�
        if(!visited[v])//vδ������
        	DFS_AL(v);
    }
}

void DFS(){//����ͨͼ�������ڽӱ��������ȱ���
    for(int i=1;i<=n;i++)//����ͨͼ��Ҫ��©�㣬���δ�����ʵĶ���
    	if(!visited[i])//iδ������,��iΪ����ٴ�������ȱ���
       		DFS_AL(i);
}

int main(){
    createAL();
    printg();
    memset(visited,false,sizeof(visited));//��ʼ��Ϊfalse 
    cout<<"������ȱ������У�"<<endl;
    DFS_AL(1);
    return 0;
}
/*�������� 
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
