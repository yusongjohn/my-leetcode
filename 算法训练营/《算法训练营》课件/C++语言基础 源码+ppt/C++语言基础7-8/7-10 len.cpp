#include<iostream>
#include<cstring>//c-����ַ��� ͷ�ļ� 
#include<string>
/*C-���    
strlen()
strcpy()
strcat()
strcmp()
strchr(),strrchr(),strstr()
strlwr(),struplr()
*/ 
//string��: .size, . length,=,+,==,!=,>=,<=,find 
using namespace std;

int main()
{
	char s1[100];
	char s2[20]="hello��";
	string str1,str2;
	cin>>s1;
	cout<<strlen(s1)<<endl;
	strcat(s1,s2);
	cout<<s1<<endl;
	cout<<strcmp(s1,s2)<<endl;
	cout<<strstr(s1,s2)<<endl;//����ָ�� 
	cin>>str1>>str2;
	cout<<str1+str2<<endl;
	cout<<str1.find(str2)<<endl;//�������� 
    return 0;
}
