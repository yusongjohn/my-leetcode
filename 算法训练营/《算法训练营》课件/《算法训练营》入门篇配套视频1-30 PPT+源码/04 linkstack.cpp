#include<iostream>
using namespace std;

typedef struct Snode{
	int data; //������
	struct Snode *next; //ָ����
}Snode,*LinkStack;

bool InitStack(LinkStack &S){    //����һ����ջS
	S=NULL;
	return true;
}

bool Push(LinkStack &S,int e){     //��ջ������Ԫ��e
	LinkStack p;
	p=new Snode;                    //�����½��
	p->data=e;                      //��e�����½��������
	p->next=S;                      //���½���ָ����ָ��S������S�ĵ�ַ��ֵ���½���ָ����
	S=p;                            //�޸�ջ��ָ��Ϊp
	return true;
}

bool Pop(LinkStack &S,int &e){      //ɾ��S��ջ��Ԫ�أ���e������ֵ
	LinkStack p;
	if(S==NULL)                   //ջ��
		return false;
	e=S->data;                   //��ջ��Ԫ�ظ���e
	p=S;                         //��p����ջ��Ԫ�ص�ַ���Ա��ͷ�
	S=S->next;                   //�޸�ջ��ָ�룬ָ����һ�����
	delete p;                   //�ͷ�ԭջ��Ԫ�صĿռ�
	return true;
}

int GetTop(LinkStack S){      //����S��ջ��Ԫ�أ����޸�ջ��ָ��
	if(S!=NULL)               //ջ�ǿ�
		return S->data;        //����ջ��Ԫ�ص�ֵ��ջ��ָ�벻��
    else
        return -1;
}

int main(){
	int n,x;
	LinkStack S;
	InitStack(S);//��ʼ��һ��˳��ջS
	cout<<"������Ԫ�ظ���n��"<<endl;
	cin>>n;
	cout<<"����������n��Ԫ�أ�������ջ��"<<endl;
	while(n--){
		cin>>x; //����Ԫ��
		Push(S,x);
	}
	cout<<"Ԫ�����γ�ջ��"<<endl;
	while(S!=NULL){//���ջ���գ������γ�ջ
        cout<<GetTop(S)<<"\t";//���ջ��Ԫ��
        Pop(S,x);   //ջ��Ԫ�س�ջ
    }
	return 0;
}
