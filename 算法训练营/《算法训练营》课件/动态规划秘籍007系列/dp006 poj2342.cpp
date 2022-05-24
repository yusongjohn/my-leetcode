#include<cstdio>
#include<algorithm>
#include<vector>
using namespace std;
const int N=6000+10;
int val[N],dp[N][2],fa[N],n;
vector<int>E[N];

void dfs(int u){
	dp[u][0]=0;
	dp[u][1]=val[u];
	for(int i=0;i<E[u].size();i++){
		int v=E[u][i];
		dfs(v);
		dp[u][0]+=max(dp[v][1],dp[v][0]);
		dp[u][1]+=dp[v][0];
	}
}

int main(){
	while(~scanf("%d",&n)){
		for(int i=1;i<=n;i++){
			scanf("%d",&val[i]);
			E[i].clear();
			fa[i]=-1;
		}
		int a,b;
		while(scanf("%d%d",&a,&b)){
	        if(a==0&&b==0) break;
	        E[b].push_back(a);
	        fa[a]=b;
		}
	    int root=1;
	    while(fa[root]!=-1) root=fa[root];
	    dfs(root);
	    printf("%d\n",max(dp[root][1],dp[root][0]));
    }
    return 0;
}
