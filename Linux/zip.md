## Basic
```shell
zip zip.zip file
zip zip_multi.zip file file1 file2
zip whole_dir.zip ./dir_to_zip
```

## With encryption and a password
### In general the built-in encryption for zip isn't incredibly strong ###

```shell
zip --encrypt secure.zip file
zip -e secure.zip file1 file2 file3 
zip -e -r somedir.zip ./dir
```

