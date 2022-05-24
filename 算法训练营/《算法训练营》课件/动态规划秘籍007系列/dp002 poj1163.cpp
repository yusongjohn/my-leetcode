#include<cstdio>
#include<cstring>
#include<algorithm>
using namespace std;
const int maxn=105;
int dp[maxn][maxn];
int a[maxn][maxn];

int solve(int n){
	memset(dp,0,sizeof(dp));
    dp[1][1]=a[1][1];
    for(int i=2;i<=n;i++)
        for(int j=1;j<=i;j++)
            dp[i][j]=a[i][j]+max(dp[i-1][j],dp[i-1][j-1]);
    int ans=0;
    for(int j=1;j<=n;j++)
        ans=max(dp[n][j],ans);
    return ans;
}

int dp[maxn];//一维数组优化
int solve2(int n){
	memset(dp,0,sizeof(dp));
    dp[1]=a[1][1];
    for(int i=2;i<=n;i++)
        for(int j=i;j>=1;j--)//倒推，一维数组优化 
            dp[j]=a[i][j]+max(dp[j],dp[j-1]);
    int ans=0;
    for(int j=1;j<=n;j++)
        ans=max(dp[j],ans);
    return ans;
}

int main(){
    int n;
    scanf("%d",&n);
    for(int i=1;i<=n;i++)
		for(int j=1;j<=i;j++)
            scanf("%d",&a[i][j]);
    printf("%d\n",solve(n));
    return 0;
}
