# Built in globals
# http://ruby-doc.org/core-2.0.0/doc/globals_rdoc.html

# Latest error message 
puts $!

# Location of error
puts $@

# String last ready by gets 
puts $_

# name of the script file
puts $0 

# command line arguments
puts $*

# interpreters PID
puts $$

# exit status of last executed child process
puts $?

# line number last read by interpreter
puts $.
