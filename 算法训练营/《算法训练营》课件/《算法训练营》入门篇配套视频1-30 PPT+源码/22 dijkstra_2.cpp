//dijkstra�㷨+���ȶ����Ż� 
#include<iostream>
#include<algorithm>
#include<queue>
using namespace std;
const int N=1005;
const int INF=0x3f3f3f3f; //�����
int G[N][N],dist[N]; //G[][]Ϊ�ڽӾ���dist[i]��ʾԴ�㵽���i�����·������
int n,m; //nΪ�������mΪ����
bool flag[N]; //���flag[i]����true��˵�����i�Ѿ����뵽S����;����i����V-S����

struct node{
    int u,dis;//���u,Դ�㵽u�����·������dis
    node(){};
    node(int _u,int _dis){//���캯������ֵ���� 
        u=_u; dis=_dis;
    }
    bool operator < (const node &a)const{ //����<,���ȶ������ȼ���disԽСԽ���� 
        return dis>a.dis;
    }
};

void dijkstra(int u){
	priority_queue<node>que;  // ���ȶ����Ż�
    for(int i=1;i<=n;i++){
    	dist[i]=INF; // ��ʼ�����о���Ϊ�����
    	flag[i]=false;
	}
	dist[u]=0;
	node vs=node(u,0);
    que.push(vs);
    while(!que.empty()){
        node it=que.top();//���ȶ��ж�ͷԪ��Ϊdist��Сֵ
        que.pop();
        int t=it.u;
        if(flag[t])//˵���Ѿ��ҵ�����̾��룬�ý���Ƕ���������ظ�Ԫ��
            continue;
        flag[t]=true;
        for(int j=1;j<=n;j++){//�ɳڲ��� 
            if(!flag[j]&&dist[j]>dist[t]+G[t][j]){
                dist[j]=dist[t]+G[t][j];
                que.push(node(j,dist[j])); //�Ѹ��º����̾���ѹ�����ȶ��У�ע�⣺�����Ԫ�����ظ�
            }
        }
    }
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
    int u,v,w,st;//u��v��ʾ��㣬w��ʾu--v�ľ��룬st��ʾԴ��
    int t;//���������� 
    cin>>t;
    while(t--){
    	cin>>n>>m;
        for(int i=1;i<=n;i++)
        	for(int j=1;j<=n;j++)
            	G[i][j]=INF;//��ʼ���ڽӾ���Ϊ�����
        while(m--){
            cin>>u>>v>>w;
            G[u][v]=min(G[u][v],w); //�ڽӾ��󴢴棬������С�ľ���
        }
        cin>>st;//����Դ�� 
        dijkstra(st);
        print();
    }
    return 0;
}
