#include<cstdio>//���ر��������Ż�
#include<cstring>
using namespace std;
#define M 100005
int v[105],c[105],num[M]; //num[j]��ʾƴ�ɼ۸�jʱ���˶��ٸ���i��Ӳ��
bool dp[M]; //dp[j]��ʾǰi��Ӳ���Ƿ����ƴ�ɼ۸�j

int multi_knapsack_opt(int n,int W){//���ر��������Ż�
	memset(dp,false,sizeof(dp));//dp[j]��ʾǰi��Ӳ���Ƿ����ƴ�ɼ۸�j
    int ans=0;
	dp[0]=true;
    for(int i=1;i<=n;i++){
        memset(num,0,sizeof(num));//num[j]��ʾƴ�ɼ۸�jʱ���˶��ٸ���i��Ӳ��
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

