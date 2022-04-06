/*npm init --y */
/*file-> preferences ->keyboard shortcuts-> restart*/
console.log("app work")
const http=require("http");
const fs =require("fs")

const server =http.createServer((req,res)=>{
    fs.readFile("public1"+req.url,(err,data) => {
    if(err){return console.log(err)}
    console.log(data.toString());
            //מגדיר לי את הבקשות לתצורת HTML 
    res.writeHead(200, {"content-type":"text/html"})
    //לוקח את הדאטה וממיר אותו מבאפר עמ לכתוב למסך
    res.write(data.toString());
    res.end();
    })

})
server.listen(3000);

