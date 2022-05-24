#include<iostream>
using namespace std;
#define Maxsize 100 //���ռ�

typedef struct{
	int *elem;  //����ַ 
	int length; //˳���ĳ���
}SqList;

bool InitList(SqList &L){ //����һ���յ�˳���L
    //L��&��ʾ�������Ͳ����������ڲ��ĸı�����������Ȼ��Ч
    //����&�ڲ��ı䣬������������Ч
	L.elem=new int[Maxsize];   //Ϊ˳������Maxsize���ռ�
    if(!L.elem) return false;  //�洢����ʧ��
    L.length=0;				   //�ձ���Ϊ0
    return true;
}

bool CreateList(SqList &L){//����һ��˳���L
	int x,n;
    cout<<"������Ԫ�ظ���n��"<<endl;
	cin>>n;
	cout<<"������"<<n<<"��Ԫ�أ�"<<endl;
    for(int i=0;i<n;i++){
		if(L.length==Maxsize){
		    cout<<"˳���������";
		    return false;
	    }
	    cin>>x; //����һ������Ԫ�� 
	    L.elem[i]=x; //�����ݴ����i��λ�� 
	    L.length++; //˳�������1 
	}
	return true;
}

bool GetElem(SqList L,int i,int &e){
	if(i<1||i>L.length) return false;//�ж�iֵ�Ƿ����������������false
	e=L.elem[i-1];   //��i-1�ĵ�Ԫ�洢�ŵ�i������
	return true;
}

int LocateELem(SqList L,int x){
	for(int i=0;i<L.length;i++)
	    if(L.elem[i]==x)
		  	return i+1; //�ڼ���Ԫ�أ������5��Ԫ�أ��±���ʵΪ4
	return -1;
}

bool ListInsert_Sq(SqList &L,int i,int e){
	if(i<1||i>L.length+1) return false;	 //iֵ���Ϸ�
	if(L.length==Maxsize) return false; //�洢�ռ�����
	for(int j=L.length-1;j>=i-1;j--)
	    L.elem[j+1]=L.elem[j];   //�����һ��Ԫ�ؿ�ʼ���ƣ�ֱ����i��Ԫ�غ���
	L.elem[i-1]=e;              //����Ԫ��e�����i��λ��
	L.length++;		     	//����1
	return true;
}

bool ListDelete_Sq(SqList &L,int i,int &e){
	if((i<1)||(i>L.length)) return false;//iֵ���Ϸ�
	e=L.elem[i-1];   //����ɾ����Ԫ�ر�����e��
	for(int j=i;j<=L.length-1;j++)
		L.elem[j-1]=L.elem[j]; //��ɾ��Ԫ��֮���Ԫ��ǰ��
	L.length--; //����1
	return true;
}

void print(SqList L){
	cout<<"���˳���"<<endl;
	for(int j=0;j<=L.length-1;j++)
	    cout<<L.elem[j]<<"   ";
	cout<<endl;
}

void DestroyList(SqList &L){
	if(L.elem) 
	delete []L.elem;//�ͷŴ洢�ռ�
}

int main(){
    SqList myL;
    int i,e,x;
    cout<<"1. ��ʼ��\n";
	cout<<"2. ����\n";
	cout<<"3. ȡֵ\n";
	cout<<"4. ����\n";
	cout<<"5. ����\n";
	cout<<"6. ɾ��\n";
	cout<<"7. ���\n";
	cout<<"8. ����\n";
	cout<<"0. �˳�\n";
	int choose=-1;
	while(choose!=0){
        cout<<"��ѡ��:";
		cin>>choose;
		switch(choose){
		    case 1://��ʼ��˳���
		        cout<<"˳����ʼ��..."<<endl;
		        if(InitList(myL))
                    cout<<"˳����ʼ���ɹ���"<<endl;
                else
                    cout<<"˳����ʼ��ʧ�ܣ�"<<endl;
		        break;
		     case 2://����˳���
		        cout<<"˳�����..."<<endl;
		        if(CreateList(myL))
                    cout<<"˳������ɹ���"<<endl;
                else
                    cout<<"˳�����ʧ�ܣ�"<<endl;
                break;
            case 3://ȡֵ
                cout<<"����������i��ȡ��i��Ԫ�����"<<endl;
                cin>>i;
                if(GetElem(myL,i,e))
                    cout<<"��i��Ԫ���ǣ� "<<e<<endl;
                else
                    cout<<"˳���ȡֵʧ�ܣ�"<<endl;;
                cout<<"��i��Ԫ���ǣ� "<<e<<endl;
                break;
            case 4://����
                cout<<"������Ҫ���ҵ���x:";
                cin>>x;
                if(LocateELem(myL,x)==-1)
                    cout<<"����ʧ�ܣ�"<<endl;
                else
                    cout<<"���ҳɹ���"<<endl;
                break;
            case 5://����
                cout<<"������Ҫ�����λ�ú�Ҫ���������Ԫ��e:";
                cin>>i>>e;
                if(ListInsert_Sq(myL,i,e))
                    cout<<"����ɹ���"<< endl;
                else
                    cout<<"����ʧ�ܣ�"<<endl;
                break;
             case 6://ɾ��
                cout<<"������Ҫɾ����λ��i:";
                cin>>i;
                if(ListDelete_Sq(myL,i,e))
                    cout<<" ɾ���ɹ���"<<endl;
                else
                    cout<<"ɾ��ʧ�ܣ�"<<endl;
                break;
            case 7://���
                print(myL);
                break;
            case 8://����
                cout<<"˳�������..."<<endl;
                DestroyList(myL);
                break;
        }
	}
    return 0;
}
