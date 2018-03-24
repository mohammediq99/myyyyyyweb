/* global lesson */

/*
lesson name : calculate teat are charecters
difculity ; very esay 
what we will use : setinterval , clearinterval , math.floor , innerHTML  
*/
var seconds = 3 ; // number of seconds 
var contdiv = document.getElementById('cdown'), 
    secondPass,
    
    countDown = setInterval(function () {
        'use strict';
        secondPass();
        
        
    },1000);
function secondPass() {
  'use strict';
    var minties = Math.floor(seconds / 60);
    var remSeconds = (seconds % 60);
    contdiv.innerHTML = minties + ":" + remSeconds;
    if (seconds > 0) {
        seconds -= 1 ; // 
    } else {
        clearInterval(countDown);
        contdiv.textContent = "Done................";
    }
};
