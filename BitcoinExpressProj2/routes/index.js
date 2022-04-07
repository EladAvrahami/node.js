var express = require('express');
var router = express.Router();
const axios =require('axios')

/*// Make a request for a user with a given ID
axios.get('http://fs1.co.il/bus/bitcoin.php')
//promise
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET bit page. */
router.get('/bit', function(req, res, next) {
  //ביצוע הבקשה לנתונים מהשרת לפני הרינדור של הדף 
  axios.get('http://fs1.co.il/bus/bitcoin.php')
  .then(function (response) {
    console.log(response.data); 

    /* יצירת פעולה בגאווה סקריפט שמקצרת את שווי המטבע ל2 ספרות אחרי הנק 
    וזאת על מנת שתהיה אופציה להשתמש בה בקבצי HBS   */

    let json_ar = response.data
    for(var i in json_ar){
      //קאסטינג מסטרינג לנאמבר עמ לבצע פעולת פיקסד
      json_ar[i].myPrice= Number ( json_ar[i].price_usd).toFixed(2);
    }
    //החזרת גייסון אי אר לאחר מניפולציות גאווה סקריפט עמ לחסוך זאת בקובץ HBS 
    res.render('bit', { title: 'Bit' ,_ar:json_ar});

    /* res.render('bit', { title: 'Bit' ,_ar:response.data});
    החזרת מידע בתצורת גייסון מהכתובת אינטרנט ללא אילו 
    שינויים בהם  */
 
  })
  .catch(function (error) {
    console.log(error);
  });
 
});

module.exports = router;
