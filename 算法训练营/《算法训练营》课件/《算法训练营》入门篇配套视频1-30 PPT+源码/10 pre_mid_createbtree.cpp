#include<iostream>
using namespace std;
typedef struct Bnode{
    char data;
    struct Bnode *lchild,*rchild;
}Bnode,*Btree;

Btree pre_mid_createbtree(char *pre,char *mid,int len){ //��������ԭ������
    if(len==0)
        return NULL;
    char ch=pre[0]; //�����еĵ�1���ڵ�Ϊ��
    int index=0;
    while(mid[index]!=ch){//���������ҵ�����λ�ã��������Ϊ�ýڵ�����������ұ�Ϊ������
        index++;
    }
    Btree T=new Bnode;//�������ڵ�
    T->data=ch;
    T->lchild=pre_mid_createbtree(pre+1,mid,index);//����������
    T->rchild=pre_mid_createbtree(pre+index+1,mid+index+1,len-index-1);//����������
    return T;
}

Btree pro_mid_createbtree(char *last,char *mid,int len){//��������ԭ������
    if(len==0)
       return NULL;
    char ch=last[len-1]; //�����е����1���ڵ�Ϊ�� 
    int index=0;
    while(mid[index]!=ch)//���������ҵ�����λ�ã��������Ϊ�ýڵ�����������ұ�Ϊ������
       index++;
    Btree T=new Bnode;//�������ڵ� 
    T->data=ch;
    T->lchild=pro_mid_createbtree(last,mid,index);//����������
    T->rchild=pro_mid_createbtree(last+index,mid+index+1,len-index-1);//����������
    return T;
}

void pre_order(Btree T){//ǰ��ݹ����������
    if(T){
        cout<<T->data;
        pre_order(T->lchild);
        pre_order(T->rchild);
    }
}

void pro_order(Btree T){//����ݹ����������
    if(T){
        pro_order(T->lchild);
        pro_order(T->rchild);
        cout<<T->data;
    }
}

int main(){
    Btree T;
    int n;
    char pre[100],mid[100],last[100];
    cout<<"1. ǰ������ԭ������\n";
	cout<<"2. ��������ԭ������\n";
	cout<<"0. �˳�\n";
	int choose=-1;
	while(choose!=0){
	    cout<<"��ѡ��:";
		cin>>choose;
		switch(choose){
		    case 1://ǰ������ԭ������
		        cout<<"��������ĸ���:"<<endl;
		        cin>>n;
		        cout<<"������ǰ������:"<<endl;
		        for(int i=0;i<n;i++)
                    cin>>pre[i];
                cout<<"��������������:"<<endl;
                for(int i=0;i<n;i++)
                    cin>>mid[i];
                T=pre_mid_createbtree(pre,mid,n);
                cout<<endl;
                cout<<"��������ԭ�ɹ���������������:"<<endl;
                pro_order(T);
                cout<<endl<<endl;
                break;
            case 2://��������ԭ������
                cout<<"��������ĸ���:"<<endl;
		        cin>>n;
                cout<<"�������������:"<<endl;
                for(int i=0;i<n;i++)
                    cin>>last[i];
                cout<<"��������������:"<<endl;
                for(int i=0;i<n;i++)
                    cin>>mid[i];
                T=pro_mid_createbtree(last,mid,n);
                cout<<endl;
                cout<<"��������ԭ�ɹ����������������:"<<endl;
                pre_order(T);
                cout<<endl<<endl;
                break;
		}
	}
    return 0;
}
