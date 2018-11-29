#### Accessing secret file stored in credentials
```groovy
withCredentials([file(credentialsId: 'some_id', variable: 'secret_id'),
                 file(credentialsId: 'some_config', variable: 'config')]) {
	sh "cp \$secret_id /var/cool/secret.txt"
	sh "cp \$config /var/cool/config.txt"
}
```
