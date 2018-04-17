FROM alpine:3.6

RUN apk add --update nginx && rm -rf /var/cache/apk/*
RUN mkdir -p /run/nginx

COPY nginx-noroot.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html/index.html

USER nobody

CMD ["nginx", "-g", "daemon off;"]

