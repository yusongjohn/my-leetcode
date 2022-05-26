#include<cstdio> //�ֿ飬poj3468
#include<algorithm>
#include<cmath>
#define ll long long
#define N 100010
using namespace std;
ll a[N],sum[N],add[N];
int L[N],R[N],d;
int pos[N];
int n,m,l,r;
char op[3];

void build(){//�ֿ�Ԥ���� 
	int t=sqrt(n*1.0);//float sqrt (float),double sqrt (double),double long sqrt(double long)
    int num=n/t;
    if(n%t)  num++;
    for(int i=1;i<=num;i++){
        L[i]=(i-1)*t+1;//ÿ������Ҷ˵� 
        R[i]=i*t;
    }
    R[num]=n; //���һ����Ҷ˵�Ϊn 
    for(int i=1;i<=num;i++)
		for(int j=L[i];j<=R[i];j++){
        	pos[j]=i;     //��ʾ��j��Ԫ�����ڵ�i��
        	sum[i]+=a[j]; //����ÿ���ֵ
		}
} 

void change(int l,int r,long long d){//������£�[l,r]�����Ԫ�ؼ���d
    int p=pos[l],q=pos[r];//�������� 
    if(p==q){//��һ����
        for(int i=l;i<=r;i++)//�����޸� 
			a[i]+=d;
        sum[p]+=d*(r-l+1);//�޸ĺ�ֵ 
    }
    else{
        for(int i=p+1;i<=q-1;i++)//�м���ȫ���ǿ������� 
			add[i]+=d;
        for(int i=l;i<=R[p];i++)//��˱����޸� 
			a[i]+=d;
        sum[p]+=d*(R[p]-l+1);
        for(int i=L[q];i<=r;i++)//�Ҷ˱����޸�
			a[i]+=d;
        sum[q]+=d*(r-L[q]+1);//�޸ĺ�ֵ 
    }
}

ll query(int l,int r){//�����ѯ����ѯ[l,r]�����Ԫ�غ�ֵ 
    int p=pos[l],q=pos[r];
    ll ans=0;
    if(p==q){//��һ����
        for(int i=l;i<=r;i++)//�ۼ� 
			ans+=a[i];
        ans+=add[p]*(r-l+1);//��������� 
    }
    else{
        for(int i=p+1;i<=q-1;i++)//�ۼ��м�� 
        	ans+=sum[i]+add[i]*(R[i]-L[i]+1);
        for(int i=l;i<=R[p];i++)//��˱����ۼ�
			ans+=a[i];
        ans+=add[p]*(R[p]-l+1);
        for(int i=L[q];i<=r;i++)//�Ҷ˱����ۼ�
			ans+=a[i];
        ans+=add[q]*(r-L[q]+1);//��������� 
    }
    return ans;
}

int main(){
    scanf("%d%d",&n,&m);
    for(int i=1;i<=n;i++)
        scanf("%lld",&a[i]);
    build(); 
    for(int i=1;i<=m;i++){
        scanf("%s %d %d",op,&l,&r);
        if(op[0]=='C'){
            scanf("%d",&d);
            change(l,r,d);
        }
        else
			printf("%lld\n",query(l,r));
    }
    return 0;
}
