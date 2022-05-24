#include<iostream>
#include<list>
#include<iterator>
#include<algorithm> 
using namespace std;

void show(int n) {cout<<n<<endl;}
void print(list<int> &T)
{
	for_each(T.begin(),T.end(),show);
	cout<<endl;
}
int main() 
{
	list<int>one(5,2);//��ʼ��Ϊ5��2 
	one.push_back(10);
	one.push_front(0);
	print(one);
	
	int a[7]={1,2,3,4,5,2,1};
	list<int>two;
	two.insert(two.begin(),a,a+7);//����a
	print(two);
	
	list<int>three(two);//��ʼ��Ϊtwo 
	print(three);
	
	three.remove(2);//ɾ��ֵΪ2������Ԫ�� 
	print(three);
	
	three.splice(three.begin(),one);//����one�������oneΪ�� 
	print(three);
	print(one);
	
	three.unique();//ȥ�����ظ� 
	print(three);
	
	three.sort();//�����ȥ�� 
	three.unique();
	print(three);
	
	two.sort();//�����ϲ� 
	three.merge(two);
	print(three);
	
	
	return 0;
} 
