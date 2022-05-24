#include<iostream>
#include<cstring>//c-风格字符串 头文件 
#include<string>
/*C-风格：    
strlen()
strcpy()
strcat()
strcmp()
strchr(),strrchr(),strstr()
strlwr(),struplr()
*/ 
//string类: .size, . length,=,+,==,!=,>=,<=,find 
using namespace std;

int main()
{
	char s1[100];
	char s2[20]="hello！";
	string str1,str2;
	cin>>s1;
	cout<<strlen(s1)<<endl;
	strcat(s1,s2);
	cout<<s1<<endl;
	cout<<strcmp(s1,s2)<<endl;
	cout<<strstr(s1,s2)<<endl;//返回指针 
	cin>>str1>>str2;
	cout<<str1+str2<<endl;
	cout<<str1.find(str2)<<endl;//返回索引 
    return 0;
}
