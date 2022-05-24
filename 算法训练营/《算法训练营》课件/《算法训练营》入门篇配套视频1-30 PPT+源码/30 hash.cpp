#include<iostream>
#include<cstring>
using namespace std;
#define m 15//��ϣ��ı�
#define NULLKEY 0//��ԪΪ�յı��
int HT[m],HC[m];

int H(int key){//��ϣ����
	return key%13;
}

int Linedetect(int HT[],int H0,int key,int &cnt){//����̽��
    int Hi;
    for(int i=1;i<m;++i){
        cnt++;
        Hi=(H0+i)%m; //��������̽�ⷨ������һ����ϣ��ַHi
        if(HT[Hi]==NULLKEY || HT[Hi]==key)
            return Hi;	//����ԪHiΪ�գ�������Ԫ�ز�����
    }
    return -1;
}

int Seconddetect(int HT[],int H0,int key,int &cnt){//����̽��
    int Hi;
    for(int i=1;i<=m/2;++i){
        int i1=i*i;
        int i2=-i1;
        cnt++;
        Hi=(H0+i1)%m; //���ն���̽�ⷨ������һ����ϣ��ַ
        if(HT[Hi]==NULLKEY || HT[Hi]==key)//����ԪHiΪ�ջ���ҳɹ� 
            return Hi;
        cnt++;
        Hi=(H0+i2)%m; //���ն���̽�ⷨ������һ����ϣ��ַ
        if(Hi<0)
            Hi+=m;
        if(HT[Hi]==NULLKEY || HT[Hi]==key)//����ԪHiΪ�ջ���ҳɹ�
            return Hi;
    }
    return -1;
}

void SearchHash(int HT[],int key){//�ڹ�ϣ���в��ҹؼ���Ϊkey��Ԫ��
    int H0=H(key); //�����ϣ��ַ
    int Hi,cnt=1;
    if(HT[H0]==NULLKEY)//����ԪH0Ϊ�գ�������Ԫ�ز�����
        cout<<"����ʧ��"<<endl;
    else if(HT[H0]==key)//����ԪH0��Ԫ�صĹؼ���Ϊkey������ҳɹ�
            cout<<"���ҳɹ���"<<"�ڵ�"<<H0+1<<"λ�á�"<<"�Ƚϴ�����"<<cnt<<endl;
        else{
            Hi=Linedetect(HT,H0,key,cnt);
            //Hi=Seconddetect(HT,H0,key,cnt);
            if(HT[Hi]==key)//����ԪHi��Ԫ�صĹؼ���Ϊkey������ҳɹ�
                cout<<"���ҳɹ���"<<"�ڵ�"<<Hi+1<<"λ�á�"<<"�Ƚϴ�����"<<cnt<<endl;
            else
            	cout<<"����ʧ�ܡ�"<<"�Ƚϴ�����"<<cnt<<endl;
        }
}

bool InsertHash(int HT[],int key){
    int H0=H(key); //���ݹ�ϣ����H��key�������ϣ��ַ
    int Hi=-1,cnt=1;
    if(HT[H0]==NULLKEY){//��H0Ϊ��
        HC[H0]=1; //ͳ�ƱȽϴ���
        HT[H0]=key;	//����H0�� 
        return 1;
    }
    else{
        Hi=Linedetect(HT,H0,key,cnt);//����̽��
        //Hi=Seconddetect(HT,H0,key,cnt);//����̽��
        if(Hi!=-1 && HT[Hi]==NULLKEY){//��HiΪ��
            HC[Hi]=cnt;
            HT[Hi]=key;
            return 1;
        }
    }
    return 0;
}

void print(int HT[]){
    for(int i=0;i<m;i++)
        cout<<HT[i]<<"\t";
    cout<<endl;
}

int main(){
	int x;
	memset(HT,0,sizeof(HT));
	memset(HC,0,sizeof(HC));
	print(HT);
	cout<<"����12���ؼ��֣������ϣ���У�"<<endl;
	for(int i=0;i<12;i++){
		cin>>x;
		if(!InsertHash(HT,x)){
		    cout<<"������ϣ��ʧ�ܣ�"<<endl;
		    return 0;
		}
	}
	cout<<"�����ϣ��"<<endl;
	print(HT);
	print(HC);
	cout<<"����Ҫ���ҵĹؼ���"<<endl;
	cin>>x;
	SearchHash(HT,x);
    return 0;
}
//��������1��14 36 42 38 40 15 19 12 51 65 34 25
//��������2��14 36 42 38 40 15 19 12 51 65 34 18
