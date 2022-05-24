//��С������ kruskal�㷨
#include<iostream>
#include<algorithm>
using namespace std;
const int N=1005;
int nodeset[N];
int n,m;
struct Edge{
	int u,v,w;
}e[N*N];

bool cmp(Edge x,Edge y){//�������ȼ�������ֵ������������
	return x.w<y.w;
}

void init(int n){//ÿ������ʼ��һ�����Ϻ�
    for(int i=1;i<=n;i++)
        nodeset[i]=i;
}

bool merge(int a,int b){//�ϲ�����
    int p=nodeset[a];//pΪa���ļ��Ϻ�
    int q=nodeset[b];//qΪb���ļ��Ϻ�
    if(p==q) return false;//���Ϻ���ͬ��ʲôҲ����������
    for(int i=1;i<=n;i++){//������н�㣬�Ѽ��Ϻ���q�ĸ�Ϊp
    	if(nodeset[i]==q)
    		nodeset[i]=p;
    }
    return true;
}

int kruskal(int n){//����С������ 
    int ans=0,cnt=0;
    for(int i=0;i<m;i++){
    	if(merge(e[i].u,e[i].v)){
            ans+=e[i].w;
            cnt++;
            if(cnt==n-1)//ѡ��n-1���߽��� 
                return ans;
        }
	}      
    return 0;
}

int main(){
	int t;
	cin>>t;
	while(t--){
        cin>>n>>m;
        init(n);
        for(int i=0;i<m;i++)
            cin>>e[i].u>>e[i].v>>e[i].w;
        sort(e,e+m,cmp);
        cout<<kruskal(n)<<endl;
	}
    return 0;
}
/*�������� 
1
7 12
1 2 23
1 6 28
1 7 36
2 3 20
2 7 1
3 4 15
3 7 4
4 5 3
4 7 9
5 6 17
5 7 16
6 7 25
*/ 
