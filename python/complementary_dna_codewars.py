# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

# DNA_strand ("ATTGC") # return "TAACG"

# DNA_strand ("GTAT") # return "CATA"


# my original solution: 

def DNA_strand(dna):
	dna_list = list(dna)
	answer = []
	for gene in cool:
		if gene == "A":
			answer.append("T")
		elif gene == "T":
			answer.append("A")
		elif gene == "G":
      answer.append("C")
    else:
      answer.append("G")
  return "".join(answer)

# top ranked answer:
import string
	def DNA_strand(dna):
		return dna.translate(string.maketrans("ATCG", "TAGC"))

# translate method on string:

# (Without using the maketrans method, this is pretty unwieldy)
# Delete all characters from s that are in deletechars (if present), and then 
# translate the characters using table, which must be a 256-character string 
# giving the translation for each character value, indexed by its ordinal. If 
# table is None, then only the character deletion step is performed.

# maketrans method from string library

# string.maketrans(from, to)



# Return a translation table suitable for passing to translate(), that will map
#  each character in from into the character at the same position in to; from 
#  and to must have the same length.

# Note Don’t use strings derived from lowercase and uppercase as arguments; in some locales, these don’t have the same length. For case conversions, always use str.lower() and str.upper().

# Dictionary method:

def DNA_strand(dna):
    reference = { "A":"T",
                  "T":"A",
                  "C":"G",
                  "G":"C"
                  }
    return "".join([reference[x] for x in dna])