#include<iostream>//��vector�洢����ͼ
#include<vector>//����ͷ�ļ�<vector>
using namespace std;
const int maxn=10005; //��������ֵ
vector<int> E[maxn];//ÿ����㶨��һ��vector,�洢���ڽӵ�
int n,m; //����������� 

void createVec(){ //��vector�洢����ͼ 
	int u,v;
	cin>>n>>m; 
	for(int i=0;i<m;i++){ //mΪ����
		cin>>u>>v; //һ���ߵ���������� 
		E[u].push_back(v);
		E[v].push_back(u);
	}
}

void printg(){ //����ڽӱ�
	cout<<"----------�ڽӱ����£�----------"<<endl;
	for(int u=0;u<n;u++){
		cout<<u<<"-->";
		for(int i=0;i<E[u].size();i++){//����u�������ڽӵ� 
			int v=E[u][i];
			cout<<"["<<v<<"]\t";
		}
		cout<<endl;
	}
}

int main(){
    createVec();//��������ͼ�ڽӱ�
    printg();//����ڽӱ�
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
