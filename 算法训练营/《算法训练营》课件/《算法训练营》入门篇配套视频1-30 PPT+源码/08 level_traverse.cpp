#include<iostream>
#include<queue>//引入队列头文件
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

bool leveltraverse(Btree T){
    Btree p;
    if(!T)
        return false;
    queue<Btree>Q; //创建一个队列，指针类型
    Q.push(T); //根指针入队
    while(!Q.empty()){ //如果队列不空
        p=Q.front();//取出队头元素
        Q.pop(); //队头元素出队
        cout<<p->data<<"  ";
        if(p->lchild)
            Q.push(p->lchild); //左孩子指针入队
        if(p->rchild)
            Q.push(p->rchild); //右孩子指针入队
    }
    return true;
}

int main(){
    Btree mytree;
    cout<<"按先序次序输入二叉树中结点的值（孩子为空时输入#），创建一棵二叉树"<<endl;
    createtree(mytree);//创建二叉树
    cout<<endl;
    cout<<"二叉树的层次遍历结果："<<endl;
    leveltraverse(mytree);//层次遍历二叉树
    return 0;
}
/*测试数据 
ABD##E##CF#G###
*/
