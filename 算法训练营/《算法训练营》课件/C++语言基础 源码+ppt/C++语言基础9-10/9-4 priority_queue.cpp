#include<iostream>
#include<queue>
using namespace std;

struct goods
{
	double w;//���� 
	double v;//��ֵ 
}g[100];

bool operator <(const goods &a,const goods &b)
{
	return a.v<b.v;//����ֵԽ��Խ���� 
}

int main() 
{
	priority_queue<goods>q;
	for(int i=1;i<=5;i++)
	{
		cin>>g[i].w>>g[i].v;
		q.push(g[i]);
	}
		
	cout<<q.top().w<<"\t"<<q.top().v<<endl<<endl;
	cout<<q.size()<<endl<<endl;
	while(!q.empty())
	{
		cout<<q.top().w<<"\t"<<q.top().v<<endl;
		q.pop();
	 } 
	return 0;
} 
