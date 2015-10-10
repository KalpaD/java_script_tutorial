var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function(req,res){
  res.writeHead(200, {'Content-Type': 'video/mp4'});
  var rs = fs.createReadStream('Antarctica.A.Year.on.Ice.2013.1080p.BluRay.x264.YIFY.mp4'); rs.pipe(res);
});

server.listen(4000);
