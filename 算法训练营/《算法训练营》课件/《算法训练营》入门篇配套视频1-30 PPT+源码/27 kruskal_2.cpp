//��С������ kruskal�㷨+���鼯�Ż�
#include<iostream>
#include<algorithm>
using namespace std;
const int N=1005;
int fa[N];
int n,m;
struct Edge{
	int u,v,w;
}e[N*N];

bool cmp(Edge x,Edge y){
	return x.w<y.w;
}

void init(int n){//��ʼ�����Ϻ� 
    for(int i=1;i<=n;i++)
        fa[i]=i;
}

int find(int x){//����x�ļ��Ϻ� 
    if(x!=fa[x])//������ 
		fa[x]=find(fa[x]);//�ѵ�ǰ��㵽������·���ϵ����н��ļ��ϺŸ�Ϊ���ڼ��Ϻ�
    return fa[x];
}

bool merge(int a,int b){//�ϲ����� 
    int p=find(a);
    int q=find(b);
    if(p==q) return false;
    fa[q]=p;
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
