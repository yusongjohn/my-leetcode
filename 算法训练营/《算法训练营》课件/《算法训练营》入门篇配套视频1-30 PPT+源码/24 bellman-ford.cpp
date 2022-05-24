#include<iostream>
#include<cstring>
using namespace std;
const int N=1005;
const int INF=0x3f3f3f3f; //�����
struct node{//�߼����� 
	int a,b,w;
}e[N*N];//�ӵ㣡��������Ҫ����ΪN*N 
int dist[N];
int n,m,cnt;

void add(int u,int v,int w){//���һ���� 
	e[cnt].a=u;
	e[cnt].b=v;
	e[cnt++].w=w;
}

bool bellman_ford(int u){//��Դ��u������������������·�����ȣ������и��� 
	memset(dist,0x3f,sizeof(dist));
	dist[u]=0;
	for(int i=1;i<n;i++){//ִ��n-1��
		bool flag=false;
		for(int j=0;j<m;j++)//����m��cnt�����������ͼ��ע�������2m
			if(dist[e[j].b]>dist[e[j].a]+e[j].w){
				dist[e[j].b]=dist[e[j].a]+e[j].w;
				flag=true;
			}
		if(!flag)
			return false;
	}
	for(int j=0;j<m;j++)//��ִ��1�Σ������ɳ�˵���и���
		if(dist[e[j].b]>dist[e[j].a]+e[j].w)
			return true;
	return false;
}

void print(){//���Դ�㵽�����ڵ����̾��� 
	for(int i=1;i<=n;i++){
    	if(i!=1) cout<<" ";
        if(dist[i]==INF)
        	cout<<"impossible";
        else
        	cout<<dist[i];
    }
    cout<<endl;
}

int main(){
	int t;//����������
	int u,v,w,st;
    cin>>t;
    while(t--){
		cnt=0;
		cin>>n>>m;
		for(int i=0;i<m;i++){
			cin>>u>>v>>w;
			add(u,v,w);
		}
		cin>>st;//����Դ��
		if(bellman_ford(st))
			cout<<"ͼ���и�����"<<endl;
		else
			print(); 
    }
	return 0;
}
/*�������� 
2
5 8
1 2 2
1 3 5
2 3 2
2 4 6
3 4 7
3 5 1
4 3 2
4 5 4
1
4 4
1 2 3
2 3 -4
3 4 2
4 2 1
1
*/
