#include<iostream>
#include<cstring>//c-����ַ��� ͷ�ļ� 
#include<string>//string�����ַ��� ͷ�ļ� 
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
 	//cin>>str1;//ֻ��һ������ 
    //cout<<str1<<endl;
    //cin>>str2;//ֻ��һ������ 
    //cin.get();
	getline(cin,str2);//������з� 
    cout<<str2<<endl;
    getline(cin,str1);//������з� 
    cout<<str1<<endl;
    return 0;
}
