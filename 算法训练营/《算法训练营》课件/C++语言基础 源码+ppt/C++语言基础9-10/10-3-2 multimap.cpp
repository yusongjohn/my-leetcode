#include<iostream>
#include<map> 
#include<string>
using namespace std;

multimap<int,string,less<int> >a;//greater

void print(multimap<int,string,less<int> > &T)
{
	for(multimap<int,string>::iterator it=T.begin();it!=T.end();it++)
		cout<<(*it).first<<"\t"<<(*it).second<<endl;
}
 
int main() 
{
//	int n;
//	string s;
//	cin>>n;
//	for(int i=n;i>0;i--)
//	{
//		cin>>s;
//		a.insert(make_pair(i,s));//Ĭ������ 
//	}
//	print(a);
//	a.insert(make_pair(1,"ac"));
//	cout<<endl; 
//	print(a);
	
	multimap<string,int> m_map; 
    string s1("�й�"),s2("����"); 
    m_map.insert(make_pair(s1,50)); 
    m_map.insert(make_pair(s1,55)); 
    m_map.insert(make_pair(s1,60)); 
    m_map.insert(make_pair(s2,30)); 
    m_map.insert(make_pair(s2,20)); 
    m_map.insert(make_pair(s1,10)); 
    //   ��ʽ1
	int k; 
    multimap<string,int>::iterator m; 
	string s="�й�";
    m=m_map.find(s); 
	for(k=0;k<m_map.count(s);k++,m++) 
        cout<<m->first<<"--"<<m->second<<endl; 
//    ��ʽ2 
//    multimap<string,int>::iterator beg,end; 
//    beg=m_map.lower_bound(s1); 
//    end=m_map.upper_bound(s1);
//    for(m=beg;m!=end;m++) 
//        cout<<m->first<<"--"<<m->second<<endl; 
//
//    ��ʽ3 
//    beg = m_map.equal_range(s1).first; 
//    end = m_map.equal_range(s1).second; 
//    for(m = beg;m != end;m++) 
//        cout<<m->first<<"--"<<m->second<<endl; 	 
	return 0;
} 
