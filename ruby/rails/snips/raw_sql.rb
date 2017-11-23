# postgresql example:

# however you access your DB
database = ActiveRecord::Base.connection
sql_query = "SELECT * FROM table WHERE thing='thing'"

# the method below will return a PG::Result object
result = database.execute(sql_query)

# method below returns a 2-d array of values
useable_array = result.values
