#include<cstdio>
#include<cstring>
const int maxn=40;
using namespace std;
int dp[maxn+1];

int solve1(int n){//�ݹ飬AC��920ms
    if(n<=3)
        return n-1;
    else
        return solve1(n-2)+solve1(n-1);
}

int solve2(int n){//���仯�ݹ�(����¼)��AC��31ms 
    if(dp[n]!=0)
		return dp[n];
	if(n<=3)
        dp[n]=n-1;
    else
        dp[n]=solve2(n-2)+solve2(n-1);
    return dp[n];
}

int solve3(int n){//��̬�滮��AC��15ms 
	dp[1]=0;
	dp[2]=1;
	dp[3]=2;
    for(int i=4;i<=n;i++)
    	dp[i]=dp[i-2]+dp[i-1];
    return dp[n];
}

int solve4(int n){//��̬�滮������(�ռ��Ż�)��AC,31ms
	if(n<=3)
        return n-1;
    int s1=1,s2=2,sum=0;
    for(int i=4;i<=n;i++){
    	sum=s1+s2;
    	s1=s2;
    	s2=sum;
	}
    return s2;
}

void solve(){//��̬�滮�����AC,0ms
	dp[1]=0;
	dp[2]=1;
	dp[3]=2;
    for(int i=4;i<=maxn;i++)
    	dp[i]=dp[i-2]+dp[i-1];
}

int main(){
    int T,m;
    //solve();//��̬�滮�����
    scanf("%d",&T);
    while(T--){
        scanf("%d",&m);
        //printf("%d\n",solve1(m));
        //memset(dp,0,sizeof(dp)); //���仯�ݹ�ĳ�ʼ��
        //printf("%d\n",solve2(m));
        printf("%d\n",solve3(m));
        //printf("%d\n",solve4(m));
        //printf("%d\n",dp[m]); //��̬�滮�����
    }
    return 0;
}
