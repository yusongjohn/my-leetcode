#include<iostream>
using namespace std;

typedef struct Bnode{/*定义二叉树存储结构*/
	char data;
	struct Bnode *lchild,*rchild;
}Bnode,*Btree;

void createtree(Btree &T){	/*创建二叉树函数*/
    //按先序次序输入二叉树中结点的值（一个字符），创建二叉链表表示的二叉树T
	char ch;
	cin>>ch;
	if(ch=='#')
        T=NULL;			//递归结束，建空树
	else{
		T=new Bnode;
		T->data=ch;					//生成根结点
		createtree(T->lchild);	//递归创建左子树
		createtree(T->rchild);	//递归创建右子树
	}
}

void preorder(Btree T){//先序遍历
    if(T){
       cout<<T->data<<"  ";
       preorder(T->lchild);
       preorder(T->rchild);
    }
}

void inorder(Btree T){//中序遍历
    if(T){
       inorder(T->lchild);
       cout<<T->data<<"  ";
       inorder(T->rchild);
    }
}

void posorder(Btree T){//后序遍历
    if(T){
       posorder(T->lchild);
       posorder(T->rchild);
       cout<<T->data<<"  ";
    }
}

int main(){
    Btree mytree;
    cout<<"按先序次序输入二叉树中结点的值（孩子为空时输入#），创建一棵二叉树"<<endl;
    createtree(mytree);//创建二叉树
    cout<<endl;
    cout<<"二叉树的先序遍历结果："<<endl;
    preorder(mytree);//先序遍历二叉树
    cout<<endl;
    cout<<"二叉树的中序遍历结果："<<endl;
    inorder(mytree);//中序遍历二叉树
    cout<<endl;
    cout<<"二叉树的后序遍历结果："<<endl;
    posorder(mytree);//后序遍历二叉树
    return 0;
}
/*测试数据 
ABD##E##CF#G###
*/
