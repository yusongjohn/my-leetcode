#include <iostream>

using namespace std;

int main()
{
    int num,a,b,c;
	cin>>num;
	a=num%10;       //num的个位数字
	b=(num/10)%10;  //num的十位数字
	c=num/100;      //num的百位数字
	if (num==(a*a*a+b*b*b+c*c*c))
		cout<<num<<"是水仙花数"<<endl;
    else
        cout<<num<<"不是水仙花数"<<endl;
    return 0;
}
