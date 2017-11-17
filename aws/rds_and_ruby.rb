require 'aws-sdk-rds'

rds = Aws::RDS::Resource.new(region: 'us-east-2')

puts "-----instances------"
rds.db_instances.each do |i|
	puts "Name (ID) : #{i.id}"
	puts "Status    : #{i.db_instance_status}"
	puts
end

puts "------clusters------"
rds.db_clusters.each do |c|
  puts "Name (ID): #{c.id}"
  puts "Status:    #{c.status}"

  c.snapshots.each do |s|
    puts "  Snapshot: #{s.snapshot_id}"
    puts "  Status:   #{s.status}"
  end
end

# create a snapshot of an Amazon RDS Instance 
