/* global lesson */

/*
lesson name : create simple clock 
difculity ; very esay 
what we will use : date , 
*/

function showTime() {
    'use strict';
var now = new Date(),
    hours = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();
     if (hours > 12) {
    hours = hours-12;
}
if (hours < 10) {
    hours = '0' + hours;
}
if (min < 10){
        min = "0" + min ;
            }
    
    if (sec < 10 ){
        sec = "0" + sec ;
    }
    document.getElementById('clock').textContent = hours + ":" + min + ":" + sec ;
};
//console.log (hours);console.log (min);console.log (sec);
window.onload = function () {
    'use strict';
    setInterval(showTime,500);
    
};