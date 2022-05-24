#include<iostream>
#include<cstring>//memset������Ҫ��ͷ�ļ� 
#include<queue>//�������ͷ�ļ�
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
		for(node *t=head[u];t!=NULL;t=t->next){ //����u�������ڽӵ� 
			cout<<"["<<t->v<<"]\t";
		}
		cout<<endl;
	}
}

void BFS_AL(int u){//�����ڽӱ�Ĺ�����ȱ���
    queue<int>Q; //����һ����ͨ����(�Ƚ��ȳ�)��������int����
    cout<<u<<"\t";
    visited[u]=true;
    Q.push(u); //Դ��v���
    while(!Q.empty()){ //������в���
        int v=Q.front(); //ȡ����ͷԪ��
        Q.pop();  //��ͷԪ�س���
        for(node *p=head[v];p;p=p->next){ //���μ��v�������ڽӵ�
        	int w=p->v;//wΪv���ڽӵ�
            if(!visited[w]){//wδ������
            	cout<<w<<"\t";
            	visited[w]=true;
            	Q.push(w);
            }
        }
    }
}

void BFS(){//����ͨͼ�������ڽӱ�Ĺ�����ȱ���
    for(int i=1;i<=n;i++)//����ͨͼ��Ҫ��©�㣬���δ�����ʵĶ���
    	if(!visited[i])//iδ������,��iΪ����ٴι�����ȱ���
       		BFS_AL(i);
}

int main(){
    createAL();
    printg();
    memset(visited,false,sizeof(visited));//��ʼ��Ϊfalse 
    cout<<"������ȱ������У�"<<endl;
    BFS_AL(1);
    return 0;
}
/*��������
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
