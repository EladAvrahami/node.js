console.log("The http module")


/*מבצעה פעולה כל 3 שניות של הדפסה על המסך */
/*let timer = setInterval(()=>{
    console.log("hello")
    },3000);*/


const http=require("http")
const server=http.createServer((req,res)=>{
    //הפעולה שתתבצע היא כתיבת שלום
    res.write("hello2")
    //יאמר לשרת לסיים לעבוד כי סיימתי להעביר את כל המידע שאני רוצה 
    //ימנע מצב של לופ אינסופי 
    res.end();
}) 

//יציין לאיזה סרבר להאזין 
server.listen(3001)