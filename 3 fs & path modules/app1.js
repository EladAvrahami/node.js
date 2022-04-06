//מודולים מובנים בנוד:
/*__filename , __dirname ,path */ 

console.log("modules test")

//מראה את הנתיב כולל קובץ נוכחי של הקובץ הנ"ל ששמור על המחשב 
console.log(__filename +   " באמצעות  __filename  ");
// יחיזיר את הנתיב איפה שהקובץ נמצא לוקלית 
console.log(__dirname +   " באמצעות  __dirname");

const path= require("path");

//יחיזר רק את שם הקובץ 
console.log(path.basename(__filename))
 //מחזיר רק את סיומת הקובץ יעזור בוולידציה של העלאת קבצים 
console.log(path.extname(__filename));



/*דוגמא לשימושים באמצעות URL  */
let url ="http://fs1.co.il/bus/shop.php";
console.log(path.basename(url))
console.log(path.extname(url));
//נותן כתובת עד הקובץ 
console.log(path.dirname(url));







