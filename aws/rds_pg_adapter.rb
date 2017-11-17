require 'pg'

PG::Connection.new(
	host: "mark-productivity-devity.cepzydtxzbqf.us-east-2.rds.amazonaws.com",
	port: 5432,
	user: "markfranciose",
	dbname: "mark_productivity",
	connect_timeout: 4000)
