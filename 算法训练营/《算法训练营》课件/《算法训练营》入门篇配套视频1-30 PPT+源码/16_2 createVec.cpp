#include<iostream>//��vector�洢����ͼ
#include<vector>
#include<map> 
using namespace std;
const int maxn=10005; //��������ֵ
vector<int> E[maxn];//ÿ����㶨��һ��vector,�洢���ڽӵ�
map<string,int>mp;//mapӳ�䣬�ַ���ӳ��һ��������� 
int n,m; //����������� 

void createVec(){ //��vector�洢����ͼ 
	string s1,s2;
	int k=1;
	cin>>n>>m; 
	for(int i=0;i<m;i++){ //mΪ���� 
		cin>>s1>>s2;//һ���ߵ���������ַ��� 
		if(mp[s1]==0)
			mp[s1]=k++;//ӳ��һ������� 
		if(mp[s2]==0)
			mp[s2]=k++;
		E[mp[s1]].push_back(mp[s2]);
	} 
}

void printg(){//����ڽӱ�
	cout<<"----------�ڽӱ����£�----------"<<endl;
	for(int u=1;u<=n;u++){ //����Ŵ�1��ʼ 
		cout<<u<<"-->";
		for(int i=0;i<E[u].size();i++){ //����u�������ڽӵ� 
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
beijing shanghai
beijing shenzhen
shanghai guangzhou
shanghai shenzhen
guangzhou shenzhen
*/
