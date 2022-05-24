#include<iostream>
#include<cstring>
using namespace std;
const int N=100; //���������ֵ
const int INF=0x3f3f3f3f; // �����
int G[N][N],dist[N][N]; //G[][]Ϊ�ڽӾ���dist[i][j]��ʾi��j�����·������
int p[N][N]; //p[i][j]��ʾi��j�����·����j��ǰ��
int n,m; //nΪ�������mΪ����

void Floyd(){ //��Floyd�㷨��������G�и��Զ���i��j֮������·��
    for(int i=0;i<n;i++){ //��ʼ��
		for(int j=0;j<n;j++){
			if(i==j)
				dist[i][j]=0;//�Լ����Լ���̾���Ϊ0 
			else
				dist[i][j]=G[i][j];
			if(dist[i][j]<INF&&i!=j)
				p[i][j]=i;  //���i��j֮���бߣ���j��ǰ����Ϊi
			else
				p[i][j]=-1; //���i��j֮���ޱߣ���j��ǰ����Ϊ-1
		}
	}
	for(int k=0;k<n;k++)
		for(int i=0;i<n;i++)
			for(int j=0;j<n;j++)
				if(dist[i][k]+dist[k][j]<dist[i][j]){//��i��k��j��һ��·������
					dist[i][j]=dist[i][k]+dist[k][j]; //����dist[i][j]
					p[i][j]=p[k][j]; //����j��ǰ��
				}
}

void print(){
    for(int i=0;i<n;i++){//�����̾�������
        for(int j=0;j<n;j++)
            cout<<dist[i][j]<<"\t";
        cout<<endl;
    }
    cout<<endl;
    for(int i=0;i<n;i++){//���ǰ������
        for(int j=0;j<n;j++)
            cout<<p[i][j]<<"\t";
        cout<<endl;
    }
}

void DisplayPath(int s,int t){//���s��t�����·��
	if(p[s][t]!=-1){
		DisplayPath(s,p[s][t]);
		cout<<p[s][t]<<"-->";
	}
}

int main(){
    int u,v,w;
	cin>>n>>m;
    for(int i=0;i<n;i++)//��ʼ���ڽӾ���
    	for(int j=0;j<n;j++)
			G[i][j]=INF;
    for(int i=0;i<m;i++){
        cin>>u>>v>>w;
        G[u][v]=min(G[u][v],w); //�ڽӾ��󴢴棬������С�ľ���
    }
    Floyd();
    print();
	cout<<"����·�������u���յ�v,���u��v�����·��"<<endl;
	cin>>u>>v;
	cout<<"���·��Ϊ��";
	DisplayPath(u,v);
	cout<<v<<endl;
	cout<<"���·���ĳ���Ϊ��"<<dist[u][v]<<endl;
    return 0;
}
/*�������� 
4 8
0 1 1
0 3 4
1 2 9
1 3 2
2 0 3
2 1 5
2 3 8
3 2 6
0 2
*/
