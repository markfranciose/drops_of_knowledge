def add_big_numbers(n1, n2)
  n1 = n1.split('')
  n2 = n2.split('')
  sum = ''
  carry = 0
  while (n1.any? || n2.any? || carry > 0) 
    carry += n1.pop.to_i + n2.pop.to_i
    sum = (carry % 10).to_s + sum
    carry = carry > 9 ? 1 : 0
  end

  sum
end

p add_big_numbers('11', '22')
p add_big_numbers('111111111111111111111111111111111111111111111111111', '22')
