#!/bin/bash

# declare STRING variable
STRING="HELLO WORLD"
# print STRING variable to standard out
echo $STRING


# Global and local vars
# 'normal' declared vars have local scope

VAR="global variable"

function local_var {
	local VAR="local variable" # local is a reserved word
	echo $VAR
}
echo $VAR
local_var
echo $VAR
