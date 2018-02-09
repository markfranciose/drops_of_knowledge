#include <iostream>

using namespace std;

int main( int argc,
					char *argv[],
					char *envp[] )
{

	std::string version = ".0014242 pre-alpha release candidate";

	if (argv[1] == std::string("-v"))
	{
		cout << "Coalesce Point Cloud Offset tool \n";
		cout << version; 
		cout << "\n";
		return 0;
	}

	if (argv[1] == std::string("-h"))
	{
		cout << "help!!";
		return 0; 
	}

}
