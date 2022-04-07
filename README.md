# node.js + Express proj
### start+ sum node.js important subj

## General / Terminal commands:
#### Download latest express version  :
terminal -> npx express --hbs -> npm install
#### Terminat process  :
cntrl+ c


## part 11 - VIP Proj
### get out index with for loops in hbs file 
{{#if}} -if בתוך הנדל ברס  בדיקה האם קיים מאפיין מסויים בגייסון/מערך, אם לא מוצא את המאפיין תבצע את הפעולה  </br>
{{else}} - שים לב שנכתב בתוך ה if </br> 
{{#each _ar}} - לכתיבת אובייקטים עי מעבר על מערך באמצעות דאבל אינקפסולשיין בלולואת each </br>
{{#unless worth}} - מבצע פעולת איף הפוכה כלומר במידה ומצא מאפיים בגייסון לדוגמא יבצע את הפעולה </br>
{{@index}} - find ob index 

## part 12 - VIP Proj
###   routing by url + collect prams from url 
router.get('/', function(req, res, next) { - router will effect on the location by url</br>
res.render (...)}  - render will tell me to start hbs file </br>
router.get('/:id_vip', function(req, res, next) { - נרשום נקודותיים לפני המאפיין שבגרשיים עמ שיבין שלא מדובר בהפנייה לתקייה אלא בפרמטר

## BITCOIN_Project
###   routing by url + collect prams from url 
1.Download Axios . </br>
*bit.hbs file - in order to choose spesific coin from coin array api i willl write : {{array.0.name}} </br>
so the array- is a parameter that contain my json data, 0- is the index of the obj in that json api , and name - will be one an attribute in that json obj</br>
2. Add bootstarp link to the general layout.hbs file.  from ->https://getbootstrap.com/docs/5.1/getting-started/download/</br>
3. 




