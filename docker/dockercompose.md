
exposing services:
```yaml
version: '2'
services:
  mysql:
    image: mysql
    net: "host"
  nginx:
    image: nginx
    net: "host"
  app:
    image: rails
    net: "host"
```
