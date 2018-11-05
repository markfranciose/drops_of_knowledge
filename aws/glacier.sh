##############################################################################
# COMMON GLACIER CLI USES
##############################################################################

# check the vaults for your account
# passing '-' as an argument to the account-id flag will use your configured account
glacier_vaults()
{
    aws glacier list-vaults --account-id -
}

########## check a single vault's info ################
# single argument, the name of the vault
glacier_vault()
{
    aws glacier describe-vault --account-id - --vault-name $1
}

######### create a vault ###################
# single argument, vault name
glacier_create() 
{
    aws glacier create-vault --account-id - --vault-name $1
}

########## delete a vault ###################
# single argument, vault name
glacier_delete()
{
    aws glacier delete-vault --account-id - --vault-name $1
}

######### upload archive #####################
# 1st argument, name of the vault
# 2nd argument, path to archive
glacier_upload()
{
    aws glacier upload-archive --account-id - --vault-name $1 --body $2
}

alias glacier_add='glacier_upload'
