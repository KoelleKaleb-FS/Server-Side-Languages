const http = require("http");
require("dotenv").config();

const server = http.createServer((req, res) => {
   res.setHeader("Content-Type", "text/plain");
   res.write("<h1>Hello World</h1>")
    res.end()
});


server.listen(process.env.PORT, ()=> {
    console.log(`listening on ${process.env.PORT}`);
});