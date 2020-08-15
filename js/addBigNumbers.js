
// case 1: same length 
console.log(addBigNumbers('1', '2'));
// case 2: different length
console.log(addBigNumbers('1111111', '2'));

// case 3: long nums
console.log(addBigNumbers('111111111111111111111111111111111111111111111', '2222'));

function addBigNumbers(n1, n2) {
  var n1Split = n1.split('');
  var n2Split = n2.split('');
  var sum = '';
  var carry = 0;
  while ( n1Split.length || n2Split.length || carry ) {
    carry += ~~n1Split.pop() + ~~n2Split.pop();
    sum = carry % 10 + sum;
    carry = carry > 9;
  }
  
  return sum;
}

