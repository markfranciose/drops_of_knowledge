puts "Our string:"
sports_teams = ["Bears", "Bulls", "Hawks", "Cubs", "Sox"]
puts 'sports_teams = ["Bears", "Bulls", "Hawks", "Cubs", "Sox"]'

basketball_team = { 
chicago: "Bulls",
indianapolis: "Pacers",
newyork: "Knicks",
boston: "Celtics"}

puts ".each examples:\n\n"
puts "string"
sports_teams.each { |a| puts "The #{a} are a team in Chicago"}
puts "hash"
basketball_team.each {|k,v| puts " the #{v} are the basketball team in #{k}"}

#If you iterate with .each on a structure, the structure doesn't actually change, example:

sports_teams.each {|a| a.upcase}
puts sports_teams

#map! changes the structure itself:

sports_teams.map! {|a| a.upcase}
puts sports_teams

#map returns the structure with the block applied, but leave the structure itself unharmed

quiet_sports = sports_teams.map{|a| a.downcase}

puts quiet_sports
puts sports_teams

sports_teams.delete_if {|a| a.length > 3}

puts sports_teams

sports_teams << "BEARS"
