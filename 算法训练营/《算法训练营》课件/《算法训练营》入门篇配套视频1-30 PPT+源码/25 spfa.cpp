#include<iostream>
#include<cstring>
#include<queue>
using namespace std;
const int N=1005;
const int INF=0x3f3f3f3f; //�����
int n,m,cnt;
int head[N],dist[N],sum[N];
bool vis[N];//����Ƿ��ڶ����� 
struct node{//��ʽǰ���� 
	int to,next,w;
}e[N*N];

void add(int u,int v,int w){//���һ����
	e[cnt].to=v;
	e[cnt].next=head[u];
	e[cnt].w=w;	
	head[u]=cnt++;
}

bool spfa(int u){
	queue<int>q;
	memset(vis,0,sizeof(vis));//����Ƿ��ڶ�����
	memset(sum,0,sizeof(sum));//ͳ����ӵĴ���
	memset(dist,0x3f,sizeof(dist));
	vis[u]=1;
	dist[u]=0;
	sum[u]++;
	q.push(u);
	while(!q.empty()){
		int x=q.front();
		q.pop();
		vis[x]=0;
		for(int i=head[x];~i;i=e[i].next){
			int v=e[i].to;
			if(dist[v]>dist[x]+e[i].w){
				dist[v]=dist[x]+e[i].w;
				if(!vis[v]){
					if(++sum[v]>=n)//˵���и���
						return true;
					vis[v]=1;
					q.push(v);
				}
			}
		}
	}
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
		memset(head,-1,sizeof(head));
		for(int i=0;i<m;i++){
			cin>>u>>v>>w;
			add(u,v,w);
		}
		cin>>st;//����Դ�� 
		if(spfa(st))
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
