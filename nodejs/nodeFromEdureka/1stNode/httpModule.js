const http = require("http");


let server = http.createServer((req,res)=>{
    res.write("yes i'm working but why i'm working, now you can update what you want without terminating the server.");
    res.end();
});

server.listen(8888);