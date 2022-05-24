#include<iostream>
using namespace std;

typedef struct Bnode{//�������洢�ṹ
	char data;
	struct Bnode *lchild,*rchild;
}Bnode,*Btree;

void createtree(Btree &T){ //����������
	char ch;
	cin>>ch; //�������������������н���ֵ��һ���ַ���
	if(ch=='#')
        T=NULL;	//�ݹ������������
	else{
		T=new Bnode;
		T->data=ch;				//���ɸ����
		createtree(T->lchild);	//�ݹ鴴��������
		createtree(T->rchild);	//�ݹ鴴��������
	}
}

int main(){
    Btree mytree;
    cout<<"�������������������н���ֵ������Ϊ��ʱ����#��������һ�ö�����"<<endl;
    createtree(mytree);//����������
    return 0;
}
/*�������� 
ABD##E##CF#G###
*/
