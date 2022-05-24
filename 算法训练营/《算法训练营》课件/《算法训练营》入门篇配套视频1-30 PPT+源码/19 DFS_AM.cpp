#include<iostream>
#include<cstring>
using namespace std;
const int maxn=10005; //��������ֵ
int E[maxn][maxn]; //�ڽӾ���
bool visited[maxn]; //���ʱ�־���飬"true"��ʾ�ѷ��� 
int n,m; //����������� 

void createAM(){
    int u,v;
	cin>>n>>m;
	for(int i=1;i<n;i++) //��ʼ������ֵΪ0��������������ʼ��Ϊ�����
		for(int j=1;j<n;j++)
			E[i][j]=0;
    for(int i=1;i<=m;i++){ //mΪ����
		cin>>u>>v; //һ���ߵ����������
		E[u][v]=E[v][u]=1; //�ڽӾ�����1
    }
}

void printg(){//����ڽӾ���
    cout<<"ͼ���ڽӾ���Ϊ��"<<endl;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++)
			cout<<E[i][j]<<"\t";
        cout<<endl;
    }
}


void DFS_AM(int u){ //�����ڽӾ����������ȱ���
    cout<<u<<"\t";
    visited[u]=true;
    for(int v=1;v<=n;v++) //���μ��u�������ڽӵ�
		if(E[u][v]&&!visited[v]) //u��v�ڽӶ���vδ������
			DFS_AM(v); //��v��ʼ�ݹ�������ȱ���
}

int main(){
    createAM();
    printg();
    memset(visited,false,sizeof(visited));//��ʼ��Ϊfalse 
    cout<<"������ȱ������У�"<<endl;
    DFS_AM(1);
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
