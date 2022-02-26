const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/about') {
        res.writeHead(200, { 'content-type': 'text/plaine' })
        res.statusCode = 200
        res.end("About")
    }else if (req.url == '/home') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.statusCode = 200
        res.end("<h1>Hello World!<h1>")
    }else{
        res.end("error")
    }
})

server.listen(2000, () => {
    console.log("Listening on 2000");
})