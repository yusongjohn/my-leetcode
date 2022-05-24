#include<iostream>
using namespace std;

typedef struct Qnode{
	int data;
	struct Qnode *next;
}Qnode,*Qptr;

typedef struct{
	Qnode *front;
	Qnode *rear;
}LinkQueue;


void InitQueue(LinkQueue &Q){    //���ӵĳ�ʼ��ע��ʹ�����ò�����������˺�������ı���Ч
	Q.front=Q.rear=new Qnode;    //����ͷ��㣬ͷָ���βָ��ָ��ͷ���
	Q.front->next=NULL;
}

void EnQueue(LinkQueue &Q,int e){  //��ӣ���Ԫ��e�����β
	Qptr s;
	s=new Qnode;
	s->data=e;
	s->next=NULL;
	Q.rear->next=s;               //��Ԫ�ز����β
	Q.rear=s;                     //��βָ�����
}

bool DeQueue(LinkQueue &Q,int &e){  //���ӣ�ɾ��Q�Ķ�ͷԪ�أ���e������ֵ
	Qptr p;
	if(Q.front==Q.rear)             //�ӿ�
		return false;
	p=Q.front->next;
	e=p->data;                      //�����ͷԪ��
	Q.front->next=p->next;
	if(Q.rear==p)                   //��������ֻ��һ��Ԫ�أ�ɾ������Ҫ�޸Ķ�βָ��
        Q.rear=Q.front;
	delete p;
	return true;
}

int GetHead(LinkQueue Q){            //ȡ��ͷԪ�أ����޸Ķ�ͷָ��
	if(Q.front!=Q.rear)             //���зǿ�
		return Q.front->next->data;
    return -1;
}

int main(){
	LinkQueue Q;
	int n,x;
	InitQueue(Q);//��ʼ������(һ��Ҫ��ʼ�����������洢����)
	cout<<"������Ԫ�ظ���n��"<<endl;
	cin>>n;
	cout<<"����������n����������������ӣ�"<<endl;
    while(n--){
       	cin>>x;
		EnQueue(Q,x);//���
    }
    cout<<"��ͷԪ�أ�"<<GetHead(Q)<<endl;
	cout<<"Ԫ�����γ��ӣ�"<<endl;
	while(true){//���ջ���գ������γ�ջ
        if(DeQueue(Q,x))
            cout<<x<<"\t";//����Ԫ��
        else
            break;
    }
    cout<<endl;
	return 0;
}
