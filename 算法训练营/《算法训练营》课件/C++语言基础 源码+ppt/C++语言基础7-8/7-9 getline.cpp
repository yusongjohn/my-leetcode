#include<iostream>
#include<cstring>//c-风格字符串 头文件 
#include<string>//string对象字符串 头文件 
using namespace std;
const int maxsize=100;
int main()
{
	char s1[maxsize],s2[maxsize],s3[maxsize],s4[maxsize];
	string str1,str2;
//	cin.getline(s1,maxsize);
//	cout<<strlen(s1)<<endl;
//	cout<<s1<<endl;
//	cin.getline(s2,maxsize);
//	cout<<strlen(s2)<<endl;
//  cout<<s2<<endl;
//    cin.get(s3,maxsize).get();
//    cout<<s3<<endl;
//    cin.get(s4,maxsize);
//    cout<<s4<<endl;
//    cin>>s3;
//    cout<<s3<<endl;
//    cin.get();
//    cin.getline(s4,maxsize);
//    cout<<s4<<endl;
 	//cin>>str1;//只读一个单词 
    //cout<<str1<<endl;
    //cin>>str2;//只读一个单词 
    //cin.get();
	getline(cin,str2);//会读换行符 
    cout<<str2<<endl;
    getline(cin,str1);//会读换行符 
    cout<<str1<<endl;
    return 0;
}
