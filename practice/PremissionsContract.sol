pragma solidity ^0.4.0;

contract PermissionsContract {


	string word = "Hi, Victor"; // declare vars at the top.
	address public issuer; // can be any number of accounts.
	uint public modifierTest = 3;

	// We're going to use a contructor. In OO terms this will instantiate an instance of the class (in this case, an instance of PermissionsContract on the BlockChain). 

	function PermissionsContract() {
		issuer = msg.sender; // When the contract is instantiated, it will have a single user issuer 
	}

	// this modifier is essentially a condition checker
	// think logged_in? in Ruby
	modifier ifIssuer() {
		if(issuer != msg.sender){
			throw;
		}	
		else {
			_; // this means 'continue'
		}
	}

	function getWord()  constant returns(string) {
		return word;
	}

	function setWord(string newWord) returns(string) {
		if (issuer != msg.sender) {
			return "This is not the creator";	
		}
		else {
			word = newWord;
			return "This is the creator!";
		}
	}

	function setTest(uint newTest) ifIssuer returns(uint) {
		modifierTest = newTest;		
	}
}
