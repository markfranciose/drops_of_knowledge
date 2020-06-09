# What is the internet?
// client and server
There are lots of ways to answer. Thousands of levels of complexity. 

Web browsers aren't the only types of clients.
curl tool.

When you enter a URL into the browser, the browser translates that URL into a request message. (To see this it sent a request under the HTTP protocol) 

my request to view a pro-wrestling site
```
GET / HTTP/1.1
Host: wrestlinginc.com
Connection: keep-alive
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36
Upgrade-Insecure-Requests: 1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
```

A request method specificies what you want to do to a resource. 

GET - retrieve something
POST - submit something
PUT - edit ()
DELETE - remove something

Headers and body:


There are other methods... 
[MDN page on HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)


### Resources on status codes:
- [W3 page on status code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html): this is the official word.
- [from Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes): some good links and unstandardized codes
- [I think MDN is the best on most everything](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

