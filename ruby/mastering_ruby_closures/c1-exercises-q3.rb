new_db = lambda do
	db = {}

	insert = lambda do |artist, album|
		db[artist] = album
		album
	end

	dump = lambda do
		db
	end

	delete = lambda do |artist|
		db.delete(artist)
	end

	{ insert: insert, dump: dump, delete: delete }
end

db = new_db.call

p db[:insert].call("Eagles", "Hell Freezes Over")
p db[:insert].call("Pink Floyd", "The Wall")
p db[:dump].call
p db[:delete].call("Pink Floyd")
p db[:dump].call
