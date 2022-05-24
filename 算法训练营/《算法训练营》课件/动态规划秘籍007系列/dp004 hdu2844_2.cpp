#include<cstdio>//多重背包数组优化
#include<cstring>
using namespace std;
#define M 100005
int v[105],c[105],num[M]; //num[j]表示拼成价格j时用了多少个第i种硬币
bool dp[M]; //dp[j]表示前i种硬币是否可以拼成价格j

int multi_knapsack_opt(int n,int W){//多重背包数组优化
	memset(dp,false,sizeof(dp));//dp[j]表示前i种硬币是否可以拼成价格j
    int ans=0;
	dp[0]=true;
    for(int i=1;i<=n;i++){
        memset(num,0,sizeof(num));//num[j]表示拼成价格j时用了多少个第i种硬币
        for(int j=v[i];j<=W;j++){
            if(!dp[j]&&dp[j-v[i]]&&num[j-v[i]]<c[i]){
                dp[j]=true;
                num[j]=num[j-v[i]]+1;
                ans++;
            }
        }
    }
    return ans;
} 

int main(){
    int n,m,ans;
    while(~scanf("%d%d",&n,&m),n&&m){
        for(int i=1;i<=n;i++)
            scanf("%d",&v[i]);
        for(int i=1;i<=n;i++)
            scanf("%d",&c[i]);
        printf("%d\n",multi_knapsack_opt(n,m));
    }
    return 0;
}

