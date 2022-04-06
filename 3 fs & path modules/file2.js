const fs = require("fs")

/*פעולה זו תיצור קובץ בשם מסויים עם ערך מסויים  */
/*שים לב שהפעלה של שיטה זו מהפעם השניה תיצור מלל נוסף (כפילות) כאשר נריץ בפעם השניה  */
fs.appendFile("explanations.tx","   bla bla ",(err) =>{
    if(err){return console.log(err)};
    console.log("file was created/updated ")
})

/*עמ לפתור בעיה זו בשימוש ב appendFile נשתמש fs.writeFile */

fs.writeFile("explanations.tx","in this lesson i summaries the obj: fs,__filename , __dirname and path",(err) =>{
    if(err){return console.log(err)};
    console.log("file was created/updated ")
})


