#include<iostream>
using namespace std;

typedef struct Bnode{//二叉树存储结构
	char data;
	struct Bnode *lchild,*rchild;
}Bnode,*Btree;

void createtree(Btree &T){ //创建二叉树
	char ch;
	cin>>ch; //按先序次序输入二叉树中结点的值（一个字符）
	if(ch=='#')
        T=NULL;	//递归结束，建空树
	else{
		T=new Bnode;
		T->data=ch;				//生成根结点
		createtree(T->lchild);	//递归创建左子树
		createtree(T->rchild);	//递归创建右子树
	}
}

int main(){
    Btree mytree;
    cout<<"按先序次序输入二叉树中结点的值（孩子为空时输入#），创建一棵二叉树"<<endl;
    createtree(mytree);//创建二叉树
    return 0;
}
/*测试数据 
ABD##E##CF#G###
*/
