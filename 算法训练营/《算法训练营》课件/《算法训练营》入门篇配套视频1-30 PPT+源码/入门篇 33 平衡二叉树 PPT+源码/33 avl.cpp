#include<iostream>//ƽ�������AVL 
#include<cstring>
#include<algorithm>
using namespace std;

typedef struct AVLNode{
   int data;
   int height;
   struct AVLNode *lchild;
   struct AVLNode *rchild;
}*AVLTree;

int Height(AVLTree T){//����߶�
    if(!T) return 0;
    return T->height;
}

void updateHeight(AVLTree &T){//���¸߶� 
	if(!T) return;
	T->height=max(Height(T->lchild),Height(T->rchild))+1;
}

AVLTree LL_Rotation(AVLTree &T){//LL��ת
    AVLTree temp=T->lchild;
    T->lchild=temp->rchild;
    temp->rchild=T;
    updateHeight(T);//���¸߶�
    updateHeight(temp);
    return temp;
}

AVLTree RR_Rotation(AVLTree &T){//RR��ת
    AVLTree temp=T->rchild;
    T->rchild=temp->lchild;
    temp->lchild=T;
    updateHeight(T);//���¸߶�
    updateHeight(temp);
    return temp;
}

AVLTree LR_Rotation(AVLTree &T){//LR��ת
    T->lchild=RR_Rotation(T->lchild);
    return LL_Rotation(T);
}

AVLTree RL_Rotation(AVLTree &T){//RL��ת
    T->rchild=LL_Rotation(T->rchild);
    return RR_Rotation(T);
}


void adjust(AVLTree &T){//��ƽ��
    if(!T)	return;
    if(Height(T->lchild)-Height(T->rchild)>1){//�������ߣ����Ÿ߶ȴ������·���ж�
        if(Height(T->lchild->lchild)>=Height(T->lchild->rchild))
            T=LL_Rotation(T);
        else
            T=LR_Rotation(T);
    }
    else if(Height(T->rchild)-Height(T->lchild)>1){//�������ߣ����Ÿ߶ȴ������·���ж�
        if(Height(T->rchild->rchild)>=Height(T->rchild->lchild))
            T=RR_Rotation(T);
        else
            T=RL_Rotation(T);
    }
}

AVLTree Insert(AVLTree &T,int x){//���� 
    if(!T){ //���Ϊ�գ������½��
        T=new AVLNode;
        T->lchild=T->rchild=NULL;
        T->data=x;
        T->height=1;
        return T;
    }
    if(T->data==x) return T;//���ҳɹ���ʲôҲ����������ʧ��ʱ�Ų���
    if(x<T->data)
        T->lchild=Insert(T->lchild,x);//���뵽������
    else
        T->rchild=Insert(T->rchild,x);//���뵽������
    updateHeight(T);
    adjust(T);
    return T;
}

AVLTree Delete(AVLTree &T,int x){//ɾ�� 
    if(!T) return T;
    if(T->data==x){//����ҵ�ɾ���ڵ�
        if(!T->lchild||!T->rchild){//�����һ������Ϊ��,�ӳи�ҵ
            AVLTree temp=T;
            T=(T->lchild)?T->lchild:T->rchild;
            delete temp;
        }
        else{//������ֱ��ǰ���������������ҽڵ㣩����֮��Ȼ��ɾ����ֱ��ǰ�� 
        	AVLTree temp;
        	temp=T->lchild;
        	while(temp->rchild)
            	temp=temp->rchild;
        	T->data=temp->data;
        	T->lchild=Delete(T->lchild,T->data);
        }
    }
    else if(T->data>x)
        T->lchild=Delete(T->lchild,x);//����������ɾ�� 
    else
        T->rchild=Delete(T->rchild,x);//����������ɾ�� 	
    updateHeight(T);
	adjust(T);
	return T;
}

void Preorder(AVLTree T){//ǰ��������㿴���Ľ��
    if(T==NULL) return ;
    cout<<T->data<<"\t"<<T->height<<endl;
    Preorder(T->lchild);
    Preorder(T->rchild);
}

void Inorder(AVLTree T){//����������㿴���Ľ��
    if(T==NULL) return ;
    Inorder(T->lchild);
    cout<<T->data<<"\t"<<T->height<<endl;
    Inorder(T->rchild);
}

void Posorder(AVLTree T){//����������㿴���Ľ��
    if(T==NULL) return ;
    Posorder(T->lchild);
    Posorder(T->rchild);
    cout<<T->data<<"\t"<<T->height<<endl;
}

void show(AVLTree T){//������ֱ��� 
    Preorder(T);
    cout<<endl;
    Inorder(T);
    cout<<endl;
    Posorder(T);
}

void CreateAVL(AVLTree &T){//���� 
    int n,x;
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>x;
        Insert(T,x);
    }
}

void Delete_test(AVLTree &T){//ɾ������ 
    int x;
    while(true){//ɾ��Ԫ��x,����-1ʱ���� 
    	cin>>x;
    	if(x==-1) break;
    	Delete(T,x);
    	show(T);
	}
}

int main(){
    int x;
    AVLTree root=NULL;
    CreateAVL(root);
    show(root);
    Delete_test(root);
    return 0;
}
/*
12
65 56 80 25 60 75 90 58 70 78 98 68
*/
