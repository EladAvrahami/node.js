//call for another page 
//חיבור קבצים בצורה פרימיטיבית 
//require("./cars2")

//עמ שיזהה את המתודה שנכתבה בקובץ מכוניות 2 יש צורך לבצע אקספורט בשיטה זו 
//const showCarName=require("./cars2")

//עמ שיזהה פונקציה הכתובה בקובץ אחר יש צורך להשתמש באקספורט
//showCarName("toyota")





/* מימוש באמצעות קריאה לקלאס שיצרתי במכוניות 2 */
const carsClass=require("./cars2")
/*
דרך 1 : 
//מימוש עי יצירת אינסטנס 
let cars=new carsClass

cars.showCarColor("red")
cars.showCarName("ferrari")
*/


//דרך 2 :
//ברגע שרשמתי סטטיקב במתודות המופיעות בתוך הקלאס שבגיליון מכוניות 2 
//אני יכול לממש מתודות בצורה הנ"ל : 
carsClass.showCarColor("green")
carsClass.showCarName("lamborghini")



//דרך 3 בהקשר לאקספורט במכוניות 2 
const {showCarName} = require("./cars2")
showCarName("Tesla from way 3 ")


console.log(" app work ")

