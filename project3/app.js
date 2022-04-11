//הגדרת משתנה קבוע עם יכולות של האקספרס
const express=require("express");
//משתנה שיש לו יכולת להפעיל שרת 
const http =require("http");
//מתעסק עם הניטובים -יודע לקחת כתובת ולעשות עליה מניפולציות  
const path=require("path")

//require will indicate the config_routes file to use its method
const {routesInit} =require("./routes/config_routes")

console.log("express is ready");
  //הגדרת משתנה שמשתמש ביכולות של האקספרס כולל האזנה לראוט
const app=express();


/* ******************************************הגדרת שני חלקי middelwere ***************************** */
//הגדרת פירסור מידע כג'ייסון מצד הלקוח 
//app.use(express.json{});

//הגדרת צתקיית PUBLIC כתקייה סטטטית שניתן לשים בה קבצים לצד לקוח ולצד לקוח יהיה גישה 
//כוח מטורף מבחינת ראוטינג כי גם יחסוך לי פעולת גט לכל קובץ בתקיית פובליק וגם יזהה אוטומטית קבצים שנמצאים בפובליק
//בניסיון להגיע אליהם בשורת הכתובת בתצוגת המשתמש
app.use(express.static(path.join(__dirname,"public")));
//console.log(__dirname)


/*after the tow middelwheres i will start the routes */
routesInit(app);

//ייצור שרת שמשתמש במשתנה אפ שיש לו את כל היכולות של אקספרס 
const server=http.createServer(app);

//const  - יהיה קבוע 
// let - יכול להשתנות 
//הגדרת פורט
//בודק באיזה סביבת עבודה רץ למצוא שרת מועדף להרצה אם לא מוצא הוא יריץ את 3000 
let port=process.env.PORT || "3000";
//מאזין לשרת בפורט 3000
server.listen(port);



