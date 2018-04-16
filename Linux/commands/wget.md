The info that wget prints is actually to STDError,
so to capture it in a file ```shell wget https://cool.file 2 > /home/cool_user/files.txt```

Specify location: 
wget -P /home/cool_user/files/
