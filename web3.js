const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3001
const server = http.createServer((req, res) => {
    if(req.url === '/') {//homepage 
        fs.readFile('index.html', (err, data) => {
            if(!err) {
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/greenwich') {
        fs.readFile('greenwich.html', (err, data) => {
            if(!err) {
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/fpt') {
        fs.readFile('fpt.html', (err, data) => {
            if(!err) {
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/hn') {
        fs.readFile('hn.html', (err, data) => {
            if(!err) {
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/dn') {
        fs.readFile('dn.html', (err, data) => {
            if(!err) {
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/hcm') {
        fs.readFile('hcm.html', (err, data) => {
            if(!err) {
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url === '/ct') {
        fs.readFile('ct.html', (err, data) => {
            if(!err) {
                res.write(data);
                res.end();
            }
        })
    }
    else {
        res.end("<h1>404 Not Found</h1>");
    }
})
server.listen(port)
