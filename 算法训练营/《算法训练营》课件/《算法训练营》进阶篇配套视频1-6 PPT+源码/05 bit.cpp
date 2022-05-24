#include<iostream>
#include<cstring>
using namespace std;
const int maxn=10005;
int n,a[maxn],c[maxn];

int lowbit(int i){//c[i]的区间长度 
	return (-i)&i;
}

void add(int i,int z){//点更新，a[i]加上z
	for(;i<=n;i+=lowbit(i))//直接后继，即父亲i+=lowbit(i)
		c[i]+=z;	
} 

int sum(int i){//前缀和，a[1]..a[i]
	int s=0;
	for(;i>0;i-=lowbit(i))//直接前驱，i-=lowbit(i);
		s+=c[i];
	return s; 
}

int sum(int i,int j){//区间和，a[i]..a[j] 
	return sum(j)-sum(i-1); 
}

int main(){
	memset(c,0,sizeof(c));
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		add(i,a[i]);//加入树状数组 
	} 
	int x1,x2;
	cin>>x1;
	cout<<sum(x1)<<endl;
	cin>>x1>>x2;
	cout<<sum(x1,x2)<<endl;
	return 0;
}
