/* global lesson */

/*
lesson name : scroll to top button
difculity ; very esay 
what we will use : pageYOffset , scrollto(X,Y) , , 
*/
window.onscroll = function () {
  'use strict';
    if (window.pageYOffset >= 500){
        document.querySelector('button').style.display ='block';
    } else {
        document.querySelector('button').style.display = "none";
    }
};
document.querySelector('button').onclick = function () {
    'use strict';
    window.scrollTo(0,0);
    
    
};

