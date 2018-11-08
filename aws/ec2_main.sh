## Create an EC2 Instance / VM

ec2_create() {
        echo 'hi'
}

list_ec2_instances() {
        aws ec2 describe-instances --query 'Reservations[*].Instances[*].  { IP:PublicIpAddress, key_name:KeyName, ebs_volume:BlockDeviceMappings[0].Ebs.VolumeId}' --output table
}
