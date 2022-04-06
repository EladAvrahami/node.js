console.log("car work ")



//כתיבת פנ בשתי שיטות אקמה 6 וישנה 
//function showCarName(_name){} - ישנה 
//ec6: 
/*
const showCarName=(_name) =>{
    console.log("name:", _name);

}
//showCarName("Mazda");


//export default 
//ניתן להשתמש פעם אחת בלבד פר דף 
module.exports= showCarName;

*/


/*נייצר מחלקה בה נרשום את  כל המתודות עמ לעשות אקספורט בפעם אחת לכולם  */


  class carsClass{
   
    //כמו בגאווה נותן את המתודות לכל הפרוייקט 
     static showCarColor(_color) {
        console.log("name:", _color);
    
    }
    
    static showCarName(_name) {
        console.log("name:", _name);
    
    }

}

/*
const showCarColor=(_color) =>{
    console.log("name:", _color);

}
const showCarName=(_name) =>{
    console.log("name:", _name);

}
*/


//export default 
//ניתן להשתמש פעם אחת בלבד פר דף 
//לכן ארשום את כל ההפניות למתודות בתוך מחלקה ולה אעשה אקספורט
module.exports= carsClass;



//דרך 3 
//הוצאה החוצה מתודה אחת בלבד 

exports.showCarName=(_name)=>{
console.log("name:",_name)
}

