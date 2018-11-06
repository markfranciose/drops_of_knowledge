aws_create_key() {
	aws ec2 create-key-pair --key-name $1
}

aws_list_keys() {
	aws ec2 describe-key-pairs
}

aws_create_security_group() {
	if [[ $# -eq 0 ]] ; then
	echo 'description'
	read description
    	echo $description
    exit 0
fi

}
