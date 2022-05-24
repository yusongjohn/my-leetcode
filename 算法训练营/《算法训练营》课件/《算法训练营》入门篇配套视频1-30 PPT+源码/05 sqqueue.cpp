#include<iostream>
using namespace std;
#define Maxsize 100

typedef  struct SqQueue{
	int *base; //����ַ
	int front,rear; //ͷָ��,βָ��
}SqQueue;


bool InitQueue(SqQueue &Q){      //ѭ�����еĳ�ʼ��ע��ʹ�����ò�����������˺�������ı���Ч
	Q.base=new int[Maxsize];     //����ռ�
	if(!Q.base) return false;
	Q.front=Q.rear=0;            //ͷָ���βָ����Ϊ�㣬����Ϊ��
	return true;
}

bool EnQueue(SqQueue &Q,int e){       //��ӣ���Ԫ��e����Q�Ķ�β
	if((Q.rear+1)%Maxsize==Q.front)  //βָ�����һλ����ͷָ�룬��������
		return false;
	Q.base[Q.rear]=e;                //��Ԫ�ز����β
	Q.rear=(Q.rear+1)%Maxsize;       //��βָ���1
	return true;
}

bool DeQueue(SqQueue &Q,int &e){    //���ӣ�ɾ��Q�Ķ�ͷԪ�أ���e������ֵ
	if(Q.front==Q.rear)
		return false;               //�ӿ�
	e=Q.base[Q.front];              //�����ͷԪ��
	Q.front=(Q.front+1)%Maxsize;    //��ͷָ���1
	return true;
}

int GetHead(SqQueue Q){           //ȡ��ͷԪ�ط������޸Ķ�ͷָ��
	if(Q.front!=Q.rear)          //���зǿ�
		return Q.base[Q.front];
    return -1;
}

int QueueLength(SqQueue Q){                   //ѭ�����еĳ���
	return (Q.rear-Q.front+Maxsize)%Maxsize;
}

int main(){
	SqQueue Q;
	int n,x;
	InitQueue(Q);//��ʼ������(һ��Ҫ��ʼ�����������洢����)
	cout<<"������Ԫ�ظ���n��"<<endl;
	cin>>n;
	cout<<"����������n����������������ӣ�"<<endl;
    while(n--){
       	cin>>x;
		EnQueue(Q,x);//���
    }
    cout<<endl;
    cout<<"������Ԫ�ظ����������ȣ�"<<QueueLength(Q)<<endl;
    cout<<"��ͷԪ�أ�"<<GetHead(Q)<<endl;
	cout<<"Ԫ�����γ��ӣ�"<<endl;
	while(true){//���ջ���գ������γ�ջ
        if(DeQueue(Q,x))
            cout<<x<<"\t";//����Ԫ��
        else
            break;
    }
    cout<<endl;
    cout<<"������Ԫ�ظ����������ȣ�"<<QueueLength(Q)<<endl;
	return 0;
}
