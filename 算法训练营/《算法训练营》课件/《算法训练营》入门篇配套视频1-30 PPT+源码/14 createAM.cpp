#include<iostream>//��������ͼ���ڽӾ���
using namespace std;
const int maxn=10005; //��������ֵ
int E[maxn][maxn]; //�ڽӾ���
int n,m; //����������� 

void createAM(){
    int u,v;
	cin>>n>>m;
	for(int i=0;i<n;i++)//��ʼ������ֵΪ0��������������ʼ��Ϊ�����
		for(int j=0;j<n;j++)
			E[i][j]=0;
    for(int i=0;i<m;i++){ //mΪ����
		cin>>u>>v; //һ���ߵ����������
		E[u][v]=E[v][u]=1; //�ڽӾ�����1
    }
}

void printg(){//����ڽӾ���
    cout<<"ͼ���ڽӾ���Ϊ��"<<endl;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++)
			cout<<E[i][j]<<"\t";
        cout<<endl;
    }
}

int main(){
    createAM();
    printg();
    return 0;
}
/*��������
4 5
0 1
0 3
1 2
1 3
2 3
*/
