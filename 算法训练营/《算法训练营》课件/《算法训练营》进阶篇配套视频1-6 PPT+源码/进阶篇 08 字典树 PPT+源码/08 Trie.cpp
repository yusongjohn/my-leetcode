#include<iostream>
#include<string>
#include<cstring>
using namespace std;
const int maxn=100005;
const int maxz=26;//��ͬ�ַ���������������10��Сд��ĸ26
int trie[maxn][maxz];
bool end[maxn];//��ʶ���ʽ��� 
int n,tot;//�ַ�����,�±� 

void init(){
	memset(trie,0,sizeof(trie));
	memset(end,false,sizeof(end));
	tot=1;
} 

void insert(string s){//���ַ���s���뵽�ֵ�����
	int p=1;
	for(int i=0;i<s.size();i++){
		int ch=s[i]-'a';//ת��������
		if(!trie[p][ch]) 
			trie[p][ch]=++tot;//��¼�±� 
		p=trie[p][ch];	 	
	}
	end[p]=true;//��ǵ��ʽ��� 
}

bool search(string s){//���ֵ����в��Ҹ��ַ����Ƿ���� 
	int p=1;
	for(int i=0;i<s.size();i++){
		p=trie[p][s[i]-'a'];
		if(!p)
			return false;
	}
	return end[p];
}

bool prefix(string s){//���ֵ����в��Ҹ��ַ����Ƿ�Ϊ�����ַ�����ǰ׺ 
	int p=1;
	for(int i=0;i<s.size();i++){
		p=trie[p][s[i]-'a'];
		if(!p)
			return false;
	}
	return true;
} 

void dfs(int p){//������ȱ��������ڲ��� 
	for(int i=0;i<26;i++){
		if(trie[p][i]){
			cout<<char(i+'a');
			dfs(trie[p][i]);
		}
	}
	cout<<endl;	
}

int main(){	
	string s;
	init();//��ʼ�� 
	cin>>n;
	while(n--){
		cin>>s;
		insert(s);
	}
	dfs(1);//������ȱ������� 
	cout<<"����Ҫ��ѯ���ַ�����"<<endl;
	cin>>s;
	if(search(s))
		cout<<"��ѯ�ɹ���"<<endl; 
	else
		cout<<"��ѯʧ�ܣ�"<<endl;
	cout<<"����Ҫ��ѯ���ַ�����prefix����"<<endl;
	cin>>s;
	if(prefix(s))
		cout<<s<<"�������ַ�����ǰ׺��"<<endl; 
	else
		cout<<s<<"���������ַ�����ǰ׺��"<<endl;
	return 0;
}
/*
5
good
very
map
goat
marry
*/
