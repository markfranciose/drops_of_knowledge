require 'pg'

pgdb = PG::Connection.new(
	host: "mark-foods.cepzydtxzbqf.us-east-2.rds.amazonaws.com",
	port: 5432,
	user: "markfranciose",
	password: ENV["PG-FOOD"],
	dbname: "mark_food",
	connect_timeout: 4000)

all_items = pgdb.exec("select * from items")

puts all_items.inspect
print all_items.values

