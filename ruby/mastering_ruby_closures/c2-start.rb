# Basics of using blocks:
print Array(1..20).select { |n| n.even? }
puts 
print Array(1..20).select { |n| n.even? && n > 10 }

require 'ostruct'

catalog = []

catalog << OpenStruct.new(name: "Nike", qty: 20, price: 99.00)

catalog << OpenStruct.new(name: "Adidas", qty: 10, price: 109.00)

catalog << OpenStruct.new(name: "New Balance", qty: 2, price: 89.00)

# sort by price
puts
print catalog.sort_by { |os| os.price }

# sort qty descending
print catalog.sort_by { |os| os.qty }.reverse


