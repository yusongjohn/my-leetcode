#include<iostream>
#include<cstring>
using namespace std;
#define MAXBIT    100
#define MAXVALUE  0x3f3f3f3f
#define MAXLEAF   30
#define MAXNODE   MAXLEAF*2 -1

typedef struct{ //�ڵ�ṹ��
    double weight; //Ȩֵ
    int parent; //˫��
    int lchild; //����
    int rchild; //�Һ���
    char value; //�ַ���Ϣ 
}HNodeType;        

typedef struct{ //����ṹ��
    int bit[MAXBIT];
    int start;
}HCodeType;
HNodeType HuffNode[MAXNODE]; //����һ���ڵ�ṹ������
HCodeType HuffCode[MAXLEAF]; //����һ������ṹ������

void HuffmanTree (HNodeType HuffNode[], int n){ //�����������
    int x1,x2; //x1��x2����С����СȨֵ�ڵ�ı��
    double m1,m2; //m1��m2����С����СȨֵ�ڵ��Ȩֵ
    for(int i=0;i<2*n-1;i++){//��ʼ��
        HuffNode[i].weight=0;
        HuffNode[i].parent=-1;
        HuffNode[i].lchild=-1;
        HuffNode[i].rchild=-1;
    }
    cout<<"Please input value and weight of leaf node ��"<<endl;
	for(int i=0;i<n;i++)//����n��Ҷ�ӵ���Ϣ��Ȩֵ
        cin>>HuffNode[i].value>>HuffNode[i].weight;
    for(int i=0;i<n-1;i++){//ִ��n-1�κϲ�
        m1=m2=MAXVALUE;
        x1=x2=0;
        for(int j=0;j<n+i;j++){//��Ȩֵ��С�ʹ�С�����޸��ڵ�������ڵ�
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
        HuffNode[x1].parent=n+i; //����5����Ϣ,�������ĸ���Ϊ�½ڵ㣬�½ڵ��Ȩֵ���������� 
        HuffNode[x2].parent=n+i;
        HuffNode[n+i].weight=m1+m2;
        HuffNode[n+i].lchild=x1;
        HuffNode[n+i].rchild=x2;
        cout<<"x1.weight and x2.weight in round "<<i+1<<"\t"<<HuffNode[x1].weight<<"\t"<<HuffNode[x2].weight<<endl; /* ���ڲ��� */
    }
}

void HuffmanCode(HCodeType HuffCode[],int n){ //������������
    HCodeType cd; //����һ����ʱ���������������ʱ����Ϣ
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
            cd.start--; //ǰ��һλ
            c=p;
            p=HuffNode[c].parent; //������һѭ������
        }
        //��Ҷ�ӽڵ�ı�����Ϣ����ʱ����cd�и��Ƴ������������ṹ������
        for(int j=cd.start+1;j<n;j++)
        	HuffCode[i].bit[j]=cd.bit[j];
        HuffCode[i].start=cd.start;
    }
}

int main(){
    int n;
    cout<<"Please input n:"<<endl;
    cin>>n;
    HuffmanTree(HuffNode,n); //�����������
    HuffmanCode(HuffCode,n); //����������
    for(int i=0;i<n;i++){ //������й���������
        cout<<HuffNode[i].value<<": Huffman code is: ";
        for(int j=HuffCode[i].start+1;j<n;j++)
            cout<<HuffCode[i].bit[j];
        cout<<endl;
    }
    return 0;
}
/*�������� 
6
a 0.05
b 0.32
c 0.18
d 0.07
e 0.25
f 0.13
*/
