#include<iostream>
using namespace std;
const int maxn=210;
int r[maxn][maxn],dp[maxn][maxn];//dp[i][j]��ʾ��iվ�㵽jվ����������
int n; 

void rent(){
    for(int d=3;d<=n;d++){//���䳤��d
        for(int i=1;i<=n-d+1;i++){//״̬���i���յ�j
            int j=i+d-1;
            for(int k=i+1;k<j;k++){//ö�پ��ߵ�k 
                if(dp[i][j]>dp[i][k]+dp[k][j])
                    dp[i][j]=dp[i][k]+dp[k][j];
            }
    	}
	}
}

int main(){
    cin>>n;
    for(int i=1;i<=n;i++){
    	for(int j=i+1;j<=n;j++){
            cin>>r[i][j];
            dp[i][j]=r[i][j];
        }
	}   
    rent();
    cout<<dp[1][n]<<endl;
    return 0;
}
