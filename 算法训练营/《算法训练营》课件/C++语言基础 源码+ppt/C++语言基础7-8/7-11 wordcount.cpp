#include<iostream>
#include<string>
using namespace std;

int count1(string s)
{
	int len,i=0,num=0;
	len=s.length();
	while(i<len)
	{
		while(s[i]==' ')//跳过多个空格 
			i++;
		if(i<len)
			num++;
		while(s[i]!=' '&&i<len)//跳过一个单词 
			i++;
	}
	return num; 
 } 
 
int count2(string s)
{
	int len,i=0,num=0;
	len=s.length();
	char c=' ';
	while(i<len)
	{
		i=s.find(c,i);
		//cout<<i<<endl;
		if(i>=0&&i<len)
		{
			if(s[i+1]!=c)
				num++;
			i++;
		}
		else
			break;		
	}
	return num; 
 } 
 
int main()
{
	string s1;
	getline(cin,s1);
	cout<<count2(s1)<<endl;
    return 0;
}
