#include<iostream>
using namespace std;

typedef struct DuLNode{
	int data; //������
	struct DuLNode *prior,*next; //ָ����
}DuLNode,*DuLinkList;      //LinkListΪָ��ṹ��LNode��ָ������

bool InitDuList_L(DuLinkList &L){//����һ���յ�˫������L
    L=new DuLNode; //�����½����Ϊͷ��㣬��ͷָ��Lָ��ͷ���
	if(!L)
		return false;  //���ɽ��ʧ��
	L->prior=L->next=NULL;   //ͷ��������ָ�����ÿ�
	return true;
}

void CreateDuList_H(DuLinkList &L){//ͷ�巨����˫������
	int n;
	DuLinkList s; //����һ��ָ�����
	L=new DuLNode;
	L->prior=L->next=NULL; //�Ƚ���һ����ͷ���Ŀ�����
	cout<<"������Ԫ�ظ���n��"<<endl;
	cin>>n;
	cout<<"����������n��Ԫ�أ�"<<endl;
	cout<<"ͷ�巨����˫������..."<<endl;
	while(n--){
		s=new DuLNode; //�����½��s
		cin>>s->data; //����Ԫ��ֵ�����½���������
		if(L->next)
            L->next->prior=s;
        s->next=L->next;
        s->prior=L;
        L->next=s; //���½��s���뵽ͷ���֮��
	}
}

bool GetElem_L(DuLinkList L,int i,int &e){//˫�������ȡֵ���ҵ�i��Ԫ��
	DuLinkList p;
	p=L->next;//pָ���һ����㣬
	int j=1; //jΪ������
	while(j<i&&p){ //˳�������ɨ�裬ֱ��pָ���i��Ԫ�ػ�pΪ��
		p=p->next; //pָ����һ�����
		j++; //������j��Ӧ��1
	}
	if(!p||j>i)
		return false; //iֵ���Ϸ�i��n��i<=0
	e=p->data; //ȡ��i������������
	return true;
}

bool LocateElem_L(DuLinkList L,int e){ //����ֵΪe��Ԫ��
	DuLinkList p;
	p=L->next;
	while(p&&p->data!=e)//˳�������ɨ�裬ֱ��pΪ�ջ�p��ָ�������������e
		p=p->next; //pָ����һ�����
	if(!p)
        return false; //����ʧ��pΪNULL
    return true;
}

bool ListInsert_L(DuLinkList &L,int i,int &e){//˫�������i��λ��֮ǰ����ֵΪe
	DuLinkList p=L,s;
	int j=0;
	while(p&&j<i){ //���ҵ�i����㣬pָ��ý��
		p=p->next;
		j++;
	}
	if(!p||j>i)//i��n+1����i��1
		return false;
	s=new DuLNode;     //�����½��
	s->data=e;       //���½�����������Ϊe
	p->prior->next=s;
	s->prior=p->prior;
	s->next=p;
	p->prior=s;
	return true;
}

bool ListDelete_L(DuLinkList &L,int i){ //˫������ɾ����i��λ��
	DuLinkList p=L;
	int j=0;
	while(p&&(j<i)){ //���ҵ�i����㣬pָ��ý��
		p=p->next;
		j++;
	}
	if(!p||(j>i))//��i>n��i<1ʱ��ɾ��λ�ò�����
		return false;
    if(p->next) //���p��ֱ�Ӻ�̽�����
        p->next->prior=p->prior;
	p->prior->next=p->next;
	delete p;        //�ͷű�ɾ�����Ŀռ�
	return true;
}

void Listprint_L(DuLinkList L){ //˫����������
    DuLinkList p;
    p=L->next;
    while(p){
        cout<<p->data<<"\t";
		p=p->next;
    }
    cout<<endl;
}

int main(){
	int i,x,e,choose;
	DuLinkList L;
	choose=-1;
	while(choose!=0){
		cout<<"1. ��ʼ��\n";
		cout<<"2. ����˫������ͷ�巨��\n";
		cout<<"3. ȡֵ\n";
		cout<<"4. ����\n";
		cout<<"5. ����\n";
		cout<<"6. ɾ��\n";
		cout<<"7. ���\n";
		cout<<"0. �˳�\n";
		cout<<"����������ѡ��:";
		cin>>choose;
		switch (choose){
			case 1: //��ʼ��һ���յ�˫������
				if(InitDuList_L(L))
					cout<<"��ʼ��һ���յ�˫������!\n";
				break;
			case 2: //����˫������ǰ�巨��
				CreateDuList_H(L);
	            cout<<"ǰ�巨����˫������������:\n";
	            Listprint_L(L);
				break;
			case 3: //˫������İ����ȡֵ
				cout<<"������һ��λ��i����ȡֵ:";
				cin>>i;
				if(GetElem_L(L,i,e)){
					cout<<"���ҳɹ�\n";
					cout<<"��"<<i<<"��Ԫ���ǣ�"<<e<<endl;
				}
				else
					cout<<"����ʧ��\n\n";
				break;
			case 4: //˫������İ�ֵ����
				cout<<"��������Ҫ����Ԫ��x:";
				cin>>x;
				if (LocateElem_L(L,x))
					cout<<"���ҳɹ�\n";
				else
					cout<<"����ʧ��! "<<endl;
				break;
			case 5: //˫������Ĳ���
				cout<<"����������λ�ú�Ԫ�أ��ÿո������:";
				cin>>i;
				cin>>x;
				if(ListInsert_L(L, i, x))
					cout<<"����ɹ�.\n\n";
				else
					cout<<"����ʧ��!\n\n";
				break;
			case 6: //˫�������ɾ��
				cout<<"��������Ҫɾ����Ԫ��λ��i:";
				cin>>i;
				if (ListDelete_L(L, i))
					cout<<"ɾ���ɹ�!\n";
				else
					cout<<"ɾ��ʧ��!\n";
				break;
			case 7: //˫����������
				cout<<"��ǰ˫�����������Ԫ�طֱ�Ϊ:\n";
				Listprint_L(L);
				cout<<endl;
				break;
		}
	}
	return 0;
}
