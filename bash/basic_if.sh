#! /bin/bash
# Anything between then and fi will be executed only if the test between the brackets is true

if [ $1 -gt 100 ]
then
	echo "$1 is larger than 100."
fi

echo "interesting choice."
