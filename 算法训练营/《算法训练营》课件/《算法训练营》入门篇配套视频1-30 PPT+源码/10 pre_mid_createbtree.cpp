#include<iostream>
using namespace std;
typedef struct Bnode{
    char data;
    struct Bnode *lchild,*rchild;
}Bnode,*Btree;

Btree pre_mid_createbtree(char *pre,char *mid,int len){ //先序、中序还原二叉树
    if(len==0)
        return NULL;
    char ch=pre[0]; //先序中的第1个节点为根
    int index=0;
    while(mid[index]!=ch){//在中序中找到根的位置，根的左边为该节点的左子树，右边为右子树
        index++;
    }
    Btree T=new Bnode;//创建根节点
    T->data=ch;
    T->lchild=pre_mid_createbtree(pre+1,mid,index);//创建左子树
    T->rchild=pre_mid_createbtree(pre+index+1,mid+index+1,len-index-1);//创建右子树
    return T;
}

Btree pro_mid_createbtree(char *last,char *mid,int len){//后序、中序还原二叉树
    if(len==0)
       return NULL;
    char ch=last[len-1]; //后序中的最后1个节点为根 
    int index=0;
    while(mid[index]!=ch)//在中序中找到根的位置，根的左边为该节点的左子树，右边为右子树
       index++;
    Btree T=new Bnode;//创建根节点 
    T->data=ch;
    T->lchild=pro_mid_createbtree(last,mid,index);//创建左子树
    T->rchild=pro_mid_createbtree(last+index,mid+index+1,len-index-1);//创建右子树
    return T;
}

void pre_order(Btree T){//前序递归遍历二叉树
    if(T){
        cout<<T->data;
        pre_order(T->lchild);
        pre_order(T->rchild);
    }
}

void pro_order(Btree T){//后序递归遍历二叉树
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
    cout<<"1. 前序中序还原二叉树\n";
	cout<<"2. 后序中序还原二叉树\n";
	cout<<"0. 退出\n";
	int choose=-1;
	while(choose!=0){
	    cout<<"请选择:";
		cin>>choose;
		switch(choose){
		    case 1://前序中序还原二叉树
		        cout<<"请输入结点的个数:"<<endl;
		        cin>>n;
		        cout<<"请输入前序序列:"<<endl;
		        for(int i=0;i<n;i++)
                    cin>>pre[i];
                cout<<"请输入中序序列:"<<endl;
                for(int i=0;i<n;i++)
                    cin>>mid[i];
                T=pre_mid_createbtree(pre,mid,n);
                cout<<endl;
                cout<<"二叉树还原成功，输出其后序序列:"<<endl;
                pro_order(T);
                cout<<endl<<endl;
                break;
            case 2://后序中序还原二叉树
                cout<<"请输入结点的个数:"<<endl;
		        cin>>n;
                cout<<"请输入后序序列:"<<endl;
                for(int i=0;i<n;i++)
                    cin>>last[i];
                cout<<"请输入中序序列:"<<endl;
                for(int i=0;i<n;i++)
                    cin>>mid[i];
                T=pro_mid_createbtree(last,mid,n);
                cout<<endl;
                cout<<"二叉树还原成功，输出其先序序列:"<<endl;
                pre_order(T);
                cout<<endl<<endl;
                break;
		}
	}
    return 0;
}
