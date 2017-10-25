# take two large strings and determine the number of deletions required to make the strings anagrams.
# return the number of deletions

def make_anagrams(string_one, string_two)
	# determine the shared letters between the two strings.
	changes = 0
	word_one_hash = Hash.new(0)
	word_two_hash = Hash.new(0)
	
	"abcdefghijklmnopqrstuvwxyz".chars.each {|c| word_one_hash[c] = 0}
	"abcdefghijklmnopqrstuvwxyz".chars.each {|c| word_two_hash[c] = 0}

	string_one.chars.each {|c| word_one_hash[c] += 1}
	string_two.chars.each {|c| word_two_hash[c] += 1}
	

	word_one_hash.each do |k,v| 
		if word_one_hash[k] > word_two_hash[k] 
			changes += word_one_hash[k] - word_two_hash[k] 
		else 
			changes += word_two_hash[k] - word_one_hash[k]
		end
	end

	p changes
end


make_anagrams("cde","abc")

# this code works well, methods could be extracted out to make it more single responsibility

def char_count(string)
	char_count = Hash.new
	"abcdefghijklmnopqrstuvwxyz".chars.each {|char| char_count[char] = 0}
	string.chars.each {|char| char_count[char] += 1}
	char_count
end

def compare_hashes(hash_one, hash_two, compare_variable)
	hash_one.each do |k,v|
		if hash_one[k] > hash_two[k]
			compare_variable += hash_one[k] - hash_two[k]
		else 
			compare_variable += hash_two[k] - hash_one[k]
		end
	end
	compare_variable
end


def make_anagrams_2(string_one, string_two)
	changes = 0

	string_one_hash = char_count(string_one)
	string_two_hash = char_count(string_two)

	compare_hashes(string_one_hash, string_two_hash, changes)
end

puts make_anagrams_2("cde", "abc")
