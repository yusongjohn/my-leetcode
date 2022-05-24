#include<iostream>
#include<cstring>
using namespace std;
#define MAXBIT    100
#define MAXVALUE  0x3f3f3f3f
#define MAXLEAF   30
#define MAXNODE   MAXLEAF*2 -1

typedef struct{ //节点结构体
    double weight; //权值
    int parent; //双亲
    int lchild; //左孩子
    int rchild; //右孩子
    char value; //字符信息 
}HNodeType;        

typedef struct{ //编码结构体
    int bit[MAXBIT];
    int start;
}HCodeType;
HNodeType HuffNode[MAXNODE]; //定义一个节点结构体数组
HCodeType HuffCode[MAXLEAF]; //定义一个编码结构体数组

void HuffmanTree (HNodeType HuffNode[], int n){ //构造哈夫曼树
    int x1,x2; //x1、x2：最小、次小权值节点的编号
    double m1,m2; //m1、m2：最小、次小权值节点的权值
    for(int i=0;i<2*n-1;i++){//初始化
        HuffNode[i].weight=0;
        HuffNode[i].parent=-1;
        HuffNode[i].lchild=-1;
        HuffNode[i].rchild=-1;
    }
    cout<<"Please input value and weight of leaf node ："<<endl;
	for(int i=0;i<n;i++)//输入n个叶子的信息和权值
        cin>>HuffNode[i].value>>HuffNode[i].weight;
    for(int i=0;i<n-1;i++){//执行n-1次合并
        m1=m2=MAXVALUE;
        x1=x2=0;
        for(int j=0;j<n+i;j++){//找权值最小和次小、且无父节点的两个节点
            if(HuffNode[j].weight<m1&&HuffNode[j].parent==-1){
                m2=m1;
                x2=x1;
                m1=HuffNode[j].weight;
                x1=j;
            }
            else if(HuffNode[j].weight<m2&&HuffNode[j].parent==-1){
                m2=HuffNode[j].weight;
                x2=j;
            }
        }
        HuffNode[x1].parent=n+i; //更新5个信息,两个结点的父亲为新节点，新节点的权值和两个孩子 
        HuffNode[x2].parent=n+i;
        HuffNode[n+i].weight=m1+m2;
        HuffNode[n+i].lchild=x1;
        HuffNode[n+i].rchild=x2;
        cout<<"x1.weight and x2.weight in round "<<i+1<<"\t"<<HuffNode[x1].weight<<"\t"<<HuffNode[x2].weight<<endl; /* 用于测试 */
    }
}

void HuffmanCode(HCodeType HuffCode[],int n){ //哈夫曼树编码
    HCodeType cd; //定义一个临时变量来存放求解编码时的信息
    int c,p;
	for(int i=0;i<n;i++){
        cd.start=n-1;
        c=i;
        p=HuffNode[c].parent;
        while(p!=-1){
            if(HuffNode[p].lchild==c)
                cd.bit[cd.start]=0;
            else
                cd.bit[cd.start]=1;
            cd.start--; //前移一位
            c=p;
            p=HuffNode[c].parent; //设置下一循环条件
        }
        //把叶子节点的编码信息从临时编码cd中复制出来，放入编码结构体数组
        for(int j=cd.start+1;j<n;j++)
        	HuffCode[i].bit[j]=cd.bit[j];
        HuffCode[i].start=cd.start;
    }
}

int main(){
    int n;
    cout<<"Please input n:"<<endl;
    cin>>n;
    HuffmanTree(HuffNode,n); //构造哈夫曼树
    HuffmanCode(HuffCode,n); //哈夫曼编码
    for(int i=0;i<n;i++){ //输出所有哈夫曼编码
        cout<<HuffNode[i].value<<": Huffman code is: ";
        for(int j=HuffCode[i].start+1;j<n;j++)
            cout<<HuffCode[i].bit[j];
        cout<<endl;
    }
    return 0;
}
/*测试数据 
6
a 0.05
b 0.32
c 0.18
d 0.07
e 0.25
f 0.13
*/
