#include<iostream>
#include<vector>

using namespace std;

int main() 
{
	vector<int>a;
	int b[3]={0};
	for(int i=0;i<=10;i++)
		a.push_back(i);
	cout<<a.size()<<endl;
	vector<int>olda(a);
	a.insert(a.begin()+1,10);//����һ��ֵ 
	a.insert(a.begin()+5,b,b+3);//����һ����Χ 
	a.swap(olda);//����
	for(int i=0;i<=10;i++) 
		cout<<a[i]<<"\t";
	cout<<endl;
	a.erase(a.begin()+3,a.end()-3);//ɾ����Χ 
	//a.clear();
	for(int i=0;i<=10;i++) 
		cout<<a[i]<<"\t";
	cout<<endl;
	for(vector<int>::iterator it=a.begin();it<a.end();it++)
		cout<<*it<<"\t";
	cout<<endl;
//	vector<int>b[100];
//	for(int i=0;i<=10;i++) 
//		b[i].push_back(i);
//	for(int i=0;i<=10;i++) 
//		cout<<b[i][0]<<"\t";
//	cout<<endl<<"good!"<<endl; 
	return 0;
} 
