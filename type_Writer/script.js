/* global lesson */

/*
lesson name : type writer effects 
difculity ; very esay 
what we will use : setInterval , i++ 
*/

var myText = 'hello from my text from Iraq on baghdad ',
i=0,
    buttton = document.querySelector('button');
buttton.onclick  = function () {
    'use strict';
    var typeWriter = setInterval( function () {
        'use strict';
        document.querySelector('p').textContent += myText[i];
        i +=1;
        if (i > myText.length-1) {
            clearInterval(typeWriter);
        }
    },200);
    
    
    
};