#include<iostream>
using namespace std;
#define N 100
int fa[N];
int n,m;

void init(){
    for(int i=1;i<=n;i++)
    	fa[i]=i;
}
 
int Find(int x){//查找
    if(x!=fa[x])
    	fa[x]=Find(fa[x]);
    return fa[x];
}

void Union(int x,int y){//合并
    int a,b;
    a=Find(x);
    b=Find(y);
    if(a!=b)
       fa[b]=a;
}

int main(){
    int x,u,v,sum=0;
    cout<<"input n and m:"<<endl;
    cin>>n>>m;
    init();
    cout<<"input u and v"<<endl;
    for(int i=1;i<=m;i++){
        cin>>u>>v;
        Union(u,v);
    }
    for(int i=1;i<=n;i++){//统计集合数 
	    Find(i);
	    cout<<fa[i]<<" ";
	    if(fa[i]==i)
	    	sum++;
    }
    cout<<endl;
    cout<<"sum="<<sum<<endl;
    return 0;
}
/*
10 9
1 2
3 4
5 2
4 6
2 6
8 7
9 7
1 6
2 4
*/
