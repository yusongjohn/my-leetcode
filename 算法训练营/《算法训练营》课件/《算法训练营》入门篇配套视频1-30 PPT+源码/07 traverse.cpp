#include<iostream>
using namespace std;

typedef struct Bnode{/*����������洢�ṹ*/
	char data;
	struct Bnode *lchild,*rchild;
}Bnode,*Btree;

void createtree(Btree &T){	/*��������������*/
    //�������������������н���ֵ��һ���ַ������������������ʾ�Ķ�����T
	char ch;
	cin>>ch;
	if(ch=='#')
        T=NULL;			//�ݹ������������
	else{
		T=new Bnode;
		T->data=ch;					//���ɸ����
		createtree(T->lchild);	//�ݹ鴴��������
		createtree(T->rchild);	//�ݹ鴴��������
	}
}

void preorder(Btree T){//�������
    if(T){
       cout<<T->data<<"  ";
       preorder(T->lchild);
       preorder(T->rchild);
    }
}

void inorder(Btree T){//�������
    if(T){
       inorder(T->lchild);
       cout<<T->data<<"  ";
       inorder(T->rchild);
    }
}

void posorder(Btree T){//�������
    if(T){
       posorder(T->lchild);
       posorder(T->rchild);
       cout<<T->data<<"  ";
    }
}

int main(){
    Btree mytree;
    cout<<"�������������������н���ֵ������Ϊ��ʱ����#��������һ�ö�����"<<endl;
    createtree(mytree);//����������
    cout<<endl;
    cout<<"��������������������"<<endl;
    preorder(mytree);//�������������
    cout<<endl;
    cout<<"��������������������"<<endl;
    inorder(mytree);//�������������
    cout<<endl;
    cout<<"�������ĺ�����������"<<endl;
    posorder(mytree);//�������������
    return 0;
}
/*�������� 
ABD##E##CF#G###
*/
