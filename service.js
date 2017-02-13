/**
 * Created by zhaoyongsheng on 17/2/13.
 */
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("欢迎来到私人网站！");
    response.end();
}).listen(8888);