/*npm init --y */

console.log("app work")

const http=require("http");
const fs =require("fs")

//const { type } = require("os");
const server =http.createServer((req,res)=>{
    //make rooting according to html name file 
    fs.readFile("public"+req.url,(err,data) => {
        if(err){
            res.writeHead(404, {"content-type": "text/html"})
        res.write("<h1>Page not found 404! </h1>");
        //PAY ATTENTION ! return break the function
        return res.end(); 
        }
        console.log(data.toString())
        res.writeHead(200, {"content-type": "text/html"})
        res.write(data.toString());
        res.end();
    })
   
})
server.listen(3000);