var http = require('http');
http.createServer(function (req, res) {
    res.write('hello world from billy!');
    res.end();
}).listen(3000, function(){
    console.log('server running at port 3000');

});