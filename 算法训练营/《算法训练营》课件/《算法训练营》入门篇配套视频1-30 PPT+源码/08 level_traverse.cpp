#include<iostream>
#include<queue>//�������ͷ�ļ�
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

bool leveltraverse(Btree T){
    Btree p;
    if(!T)
        return false;
    queue<Btree>Q; //����һ�����У�ָ������
    Q.push(T); //��ָ�����
    while(!Q.empty()){ //������в���
        p=Q.front();//ȡ����ͷԪ��
        Q.pop(); //��ͷԪ�س���
        cout<<p->data<<"  ";
        if(p->lchild)
            Q.push(p->lchild); //����ָ�����
        if(p->rchild)
            Q.push(p->rchild); //�Һ���ָ�����
    }
    return true;
}

int main(){
    Btree mytree;
    cout<<"�������������������н���ֵ������Ϊ��ʱ����#��������һ�ö�����"<<endl;
    createtree(mytree);//����������
    cout<<endl;
    cout<<"�������Ĳ�α��������"<<endl;
    leveltraverse(mytree);//��α���������
    return 0;
}
/*�������� 
ABD##E##CF#G###
*/
