# see syntax below
heredoc = <<-DELIMIT
asdasdfsdfjqfjl;kjfsalkdjf
flsajdflksdjfl jklkdfjsaldkf j
sfkjsdlkfjslk
aaaaaaaaaaaaaaaaaaaaaaaaaak
DELIMIT

puts heredoc

works_like = "WORKS LIKE"

example_two = <<-COOL
interpolation 
#{works_like}
this
COOL

puts example_two
