## Commands
tail - print last 10 lines (by default) of file to std out
head - print first 10 (by deafult) lines of file to std out
curl - makes a request and gets a response from a server
wget - same as curl, with some more features
cd - change working directory
	- cd w/ no path defaults to ~
pwd - present working directory
ls - ls list files (in pwd by default)
cat - concats files to std out (by default) - also used to print a file to std out
cp - copy
mv - move, also used to rename files
mkdir - make directory
	- p flag - if the dirs in the path don't exist, it makes them. if they do... just moves on
rm - remove a file
rmdir - remove a dir
wc - word count, also lines & chars 
echo - prints to std out

## operators

> redirects stdout to a file
>> appends stdout to a file
< pass file into command - commands that don't take files, but can use input
| output of one program into another 

## 
ctrl + d - gracefully exit from a process
ctrl + c - just get out of process

##
~ home dir

## some examples
- ls -1 | wc -l (prints # of files/dirs in pwd) 

