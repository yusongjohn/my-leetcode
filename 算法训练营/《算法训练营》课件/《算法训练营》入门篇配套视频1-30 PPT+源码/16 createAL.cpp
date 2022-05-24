#include<iostream>//��������ͼ���ڽӱ�
using namespace std;
const int maxn=10005; //��������ֵ
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
    char x,y;
	cin>>n>>m;
    for(int i=0;i<m;i++){
        cin>>x>>y; //����һ���ߵ����������ĸ����a\b\c\d\e 
        int u=x-'a'; //ת�������ֱ��
        int v=y-'a';
		adde(u,v);
    }
}

void printg(){//����ڽӱ�
	cout<<"----------�ڽӱ����£�----------"<<endl;
	for(int u=0;u<n;u++){
		cout<<u<<"-->";
		for(node *t=head[u];t!=NULL;t=t->next){ //����u�������ڽӵ� 
			cout<<"["<<t->v<<"]\t";
		}
		cout<<endl;
	}
}

int main(){
    createAL();//��������ͼ�ڽӱ�
    printg();//����ڽӱ�
    return 0;
}
/*��������
5 7
a b
a c
a e
b c
c d
c e
d e
*/
