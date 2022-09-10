var http = require('http');
var url = require('url');
var fs = require('fs');

var backend = http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
//    console.log (q);
    var filename = "." + q.pathname;


    if (filename == "./") {
        filename = "./index";
    } else if (filename.lastIndexOf(".") != -1 && filename.lastIndexOf(".") > 0) {
        filename = filename.slice(0,filename.lastIndexOf("."));
    } 

    filename = filename + ".html";
    fs.readFile (filename, function(err,data) {
        if (err) {
            res.writeHead (404, {'Content-Type':'text/html'});
            return res.end("404 file not found");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        console.log ("... Incoming request: " + req.url);
        return res.end();
    });
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    var q = url.parse(req.url,true).query;
//   var qParam = q.test || "no 'test' param passed to the url";
//    res.write(qParam);
//    res.end();
});

backend.listen(8000);

console.log("server is listenning on port 8000");
