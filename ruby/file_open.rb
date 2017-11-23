# to pull a file from the directory of the file that's being run:

File.open(File.dirname(__FILE__) + '/nameoffile.txt')
