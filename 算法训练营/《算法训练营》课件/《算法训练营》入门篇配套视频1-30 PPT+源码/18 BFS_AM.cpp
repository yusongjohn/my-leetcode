#include<iostream>
#include<cstring>//memset������Ҫ��ͷ�ļ� 
#include<queue>//�������ͷ�ļ�
using namespace std;
const int maxn=10005; //��������ֵ
int E[maxn][maxn]; //�ڽӾ���
bool visited[maxn]; //���ʱ�־���飬"true"��ʾ�ѷ��� 
int n,m; //����������� 

void createAM(){
    int u,v;
	cin>>n>>m;
	for(int i=1;i<n;i++)//��ʼ������ֵΪ0��������������ʼ��Ϊ�����
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

void BFS_AM(int u){ //�����ڽӾ���Ĺ�����ȱ���
    queue<int>Q; //����һ����ͨ����(�Ƚ��ȳ�)
	visited[u]=true;
    Q.push(u); //Դ��u���
    cout<<u<<"\t";
    while(!Q.empty()){ //������в���
        int v=Q.front(); //ȡ����ͷԪ��
        Q.pop(); //��ͷԪ�س���
        for(int w=1;w<=n;w++){ //���μ��v�������ڽӵ�
            if(E[v][w]&&!visited[w]){ //v��w�ڽӶ���wδ������
            	cout<<w<<"\t";
            	visited[w]=true;
            	Q.push(w);
            }
        }
    }
}

int main(){
    createAM();
    printg();
    memset(visited,false,sizeof(visited));//��ʼ��Ϊfalse 
    cout<<"������ȱ������У�"<<endl;
    BFS_AM(1);
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
