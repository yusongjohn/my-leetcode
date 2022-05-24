#include<iostream>
#include<limits>
#include<iomanip>
using namespace std;

int main()
{
    short short_n=SHRT_MAX;
    int int_n=INT_MAX;
    long long_n=LONG_MAX;
    long long llong_n=LONG_LONG_MAX;
    cout << "short is " <<sizeof(short_n)<<" bytes"<<endl;
    cout << "int is " <<sizeof(int_n)<<" bytes"<<endl;
    cout << "long is " <<sizeof(long_n)<<" bytes"<<endl;
    cout << "long long is   "<<sizeof(llong_n)<<" bytes"<<endl<<endl;
    cout << "long double is   "<<sizeof(long double)<<" bytes"<<endl<<endl;
	cout << "max short is   "<<short_n<<endl;
    cout << "max int is     " <<int_n<<endl;
    cout << "max long is    " <<long_n<<endl;
    cout << "max long long is   "<<llong_n<<endl;
    cout << "max long double is   "<<fixed<<(numeric_limits<long double>::max)()<<endl;
    return 0;
}
